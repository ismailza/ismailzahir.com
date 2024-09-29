import { NextApiRequest, NextApiResponse } from 'next';
import { getAllServices } from '@/lib/fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const services = await getAllServices();
    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching services' });
  }
}
