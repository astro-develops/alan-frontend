import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';

const baseUrl = "https://8259-174-198-12-198.ngrok-free.app/"

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data);

    const firstBody = {
        imageUrl: data.imageUrl,
    }

    try {
        const response = await axios.post(baseUrl + "generateText", firstBody);
        console.log(response.data); // Access the response data directly
    } catch (err) {
        console.error(err); 
    }
} 
