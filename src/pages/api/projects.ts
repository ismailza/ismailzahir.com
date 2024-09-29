import { NextApiRequest, NextApiResponse } from 'next';
import { getAllProjects } from '@/lib/fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const projects = await getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
}
