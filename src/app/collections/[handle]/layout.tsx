import Link from "next/link";
import { getProductsByPage } from "./_lib/server/actions";

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const {
    data: { title },
  } = await getProductsByPage(handle, 1, 1);

  return (
    <div className="container mx-auto p-4 min-h-screen ">
      <nav>
        <ul className="flex items-center gap-4 mb-6 text-xl">
          <li>
            <Link href="/" className="underline">
              Categories
            </Link>
          </li>

          <li aria-hidden>/</li>

          <li>
            <h1 className="font-bold">{title || "Loading..."}</h1>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}
