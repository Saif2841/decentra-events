'use client';

import { useWriteContract } from 'wagmi';
import { parseEther } from 'viem';
import { factoryABI, factoryAddress } from '@/lib/contracts';

export default function CreateEventPage() {
  const { writeContract, isPending, data: hash } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const symbol = formData.get('symbol') as string;
    const price = formData.get('price') as string;
    const supply = formData.get('supply') as string;

    writeContract({
      address: factoryAddress,
      abi: factoryABI,
      functionName: 'createEvent',
      args: [
        name,
        symbol,
        parseEther(price), // Convert ETH string to wei
        BigInt(supply),
        BigInt(Math.floor(Date.now() / 1000) + 86400) // Example: event is tomorrow
      ],
    });
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Create a New Event</h1>
      <form onSubmit={submit} className="mt-4 space-y-4">
        <input name="name" placeholder="Event Name" required className="p-2 border rounded w-full" />
        <input name="symbol" placeholder="Ticket Symbol (e.g., MYC)" required className="p-2 border rounded w-full" />
        <input name="price" type="number" step="0.01" placeholder="Price in ETH" required className="p-2 border rounded w-full" />
        <input name="supply" type="number" placeholder="Number of Tickets" required className="p-2 border rounded w-full" />
        <button type="submit" disabled={isPending} className="bg-green-500 text-white p-2 rounded">
          {isPending ? 'Confirming...' : 'Create Event'}
        </button>
        {hash && <div className="mt-2">Transaction Hash: {hash}</div>}
      </form>
    </div>
  );
}
