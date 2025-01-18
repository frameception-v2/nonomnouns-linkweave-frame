import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "LinkWeave Frame - Decentralized Link Sharing";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-purple-50">
        <div tw="flex flex-col items-center bg-white/90 p-12 rounded-2xl shadow-lg">
          <h1 tw="text-6xl font-bold text-purple-900 mb-4">{PROJECT_TITLE}</h1>
          <h3 tw="text-2xl text-purple-700 text-center max-w-[80%]">
            {PROJECT_DESCRIPTION}
          </h3>
          <div tw="mt-6 flex items-center">
            <span tw="text-purple-500 mr-2">Built on</span>
            <img 
              src="https://farcaster.xyz/farcaster-logo.svg" 
              tw="w-8 h-8"
              alt="Farcaster Logo"
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
