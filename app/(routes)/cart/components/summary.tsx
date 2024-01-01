'use client'

import { useState, useEffect } from 'react';
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAllItems = useCart((state) => state.removeAll);
    const router = useRouter()


    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(customerInfo);
        const { name, value } = e.target;
        setCustomerInfo({
            ...customerInfo,
            [name]: value
        });
    };

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id),
            customer: customerInfo,
        });
        const link = response.data?.data?.link;
        window.location = link;
    }

    useEffect(() => {
        const verifyPaymentAndHandleActions = async () => {
            const successParam = searchParams.get('success');
            const txRef = searchParams.get('tx_ref');
            const transactionId = searchParams.get('transaction_id');
            const status = searchParams.get('status');

            if (successParam) {
                try {
                    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/order/verify`;
                    const response = await axios.get(apiUrl, {
                        params: { tx_ref: txRef, transaction_id: transactionId, status: status },
                    });

                    if (response.status === 200) {
                        toast.success('Payment was successful!', { id: "payment-success" });
                        removeAllItems()
                        window.location.href = '/';

                    } else {
                        // Handle other status codes or error scenarios if needed
                        toast.error('Failed to verify payment.', { id: "payment-success" });
                    }
                } catch (error) {
                    console.error('Error occurred while verifying payment:', error);
                    toast.error('An error occurred while verifying payment.', { id: "payment-success" });
                }
            }
        };
        if (searchParams.get("success")) {
            const notification = toast.loading("Please wait!", { id: "payment-success" });
            verifyPaymentAndHandleActions();
        }

        if (searchParams.get("status") === "cancelled") {
            toast.error("Payment was canceled!");
        }

    }, [searchParams, removeAllItems]);

    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:ml-8">
            <h2 className="text-xl font-bold text-gray-900">
                Order Summary
            </h2>
            <div className="mt-6 space-y-4">
                <div className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={customerInfo.name}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2.5 focus:ring-black focus:border-black focus:border-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={customerInfo.phone}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2.5 focus:ring-black focus:border-black focus:border-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={customerInfo.email}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2.5 focus:ring-black focus:border-black focus:border-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block font-medium text-gray-700">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={customerInfo.address}
                            onChange={handleInputChange}
                            rows={3}
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2.5 focus:ring-black focus:border-black focus:border-2"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order total
                    </div>
                    <Currency value={totalPrice} />
                </div>
                <Button
                    disabled={items.length === 0}
                    onClick={onCheckout} className="w-full mt-5"
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
}

export default Summary;
