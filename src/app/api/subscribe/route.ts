import { connectToDatabase } from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await connectToDatabase();

    const existing = await Subscriber.findOne({ email });

    if (existing) {
      return NextResponse.json({ error: "Already subscribed" }, { status: 409 });
    }

    await Subscriber.create({ name, email });

    return NextResponse.json({ message: "Subscription successful" }, { status: 201 });
  } catch (err) {
    console.error("Subscription error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
