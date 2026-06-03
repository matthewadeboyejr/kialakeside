import type { Metadata } from "next";
import PageStub from "../_components/PageStub";

export const metadata: Metadata = {
  title: "About Us",
};

export default function Page() {
  return (
    <PageStub
      title="About Us"
      description="Learn about our history, mission, leadership, and the values that define KIA Lakeside."
      breadcrumb={[{ label: "About Us", href: "/about" }]}
    />
  );
}
