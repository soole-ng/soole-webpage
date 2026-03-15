import { NextResponse } from "next/server";

type TrackingResponse = {
  latitude: number;
  longitude: number;
  recorded_at: string;
  driver_fullname: string;
  driver_picture: string;
  car_name: string;
  car_plate: string;
  origin_state: string;
  destination_state: string;
  origin_point: {
    latitude: number;
    longitude: number;
  };
  destination_point: {
    latitude: number;
    longitude: number;
  };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const trackingId = searchParams.get("tracking_id")?.trim();

  if (!trackingId) {
    return NextResponse.json({ message: "tracking_id is required" }, { status: 400 });
  }

  const apiBaseUrl = process.env.RIDE_TRACKING_API_BASE_URL;

  if (!apiBaseUrl) {
    return NextResponse.json(
      { message: "Ride tracking API base URL is not configured" },
      { status: 500 }
    );
  }

  const upstreamUrl = `${apiBaseUrl.replace(/\/$/, "")}/ride-tracking?tracking_id=${encodeURIComponent(
    trackingId
  )}`;

  try {
    const response = await fetch(upstreamUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json, text/plain;q=0.9",
      },
    });

    const contentType = response.headers.get("content-type") ?? "";
    const isJson = contentType.includes("application/json");

    if (!response.ok) {
      const body = isJson ? await response.json() : await response.text();
      const message =
        (typeof body === "string" && body) ||
        (typeof body === "object" && body && "message" in body && String(body.message)) ||
        "Tracking request failed";

      return NextResponse.json({ message }, { status: response.status });
    }

    if (!isJson) {
      return NextResponse.json({ message: "Invalid tracking response format" }, { status: 502 });
    }

    const data = (await response.json()) as TrackingResponse;
    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Unable to reach tracking service" },
      { status: 503 }
    );
  }
}
