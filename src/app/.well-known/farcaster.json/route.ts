import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAibm9ub21ub3Vucy1saW5rd2VhdmUtZnJhbWUudmVyY2VsLmFwcCJ9",
      signature:
        "MHhhZTE0YzZkYmUwY2VjYmMyOTg5NGFmMjI2Nzc4NDQxZGQ2MmI2MTA1YzVkMDBhMjgxYjlhNWNmOWMyYjZjYzU3NTVjNmQzMWYyN2VhNjU5MTU3NWNjYjczOTgxZjE5MDE5ZDJjMWI4NzViNDNhMDA1NzhkZTlhZGRlODQ4NTlhNTFj",
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
