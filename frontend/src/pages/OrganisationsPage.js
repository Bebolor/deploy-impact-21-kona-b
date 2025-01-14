import React from "react";
import DocumentTitle from "react-document-title";

import OrganisationsTable from "../components/organisationsTable";

export default function OrganisationsPage() {
  return (
    <DocumentTitle title="Organisations">
      <main className="mx-7px">
        <div className="grid grid-cols-7 sm:grid-cols-7 max-w-xl lg:max-w-4xl mx-auto w-mobile mb-8 sm:mb-20">
          <div className="col-start-1 sm:col-start-2 sm:col-span-5 col-span-7">
            <h1 className="border-b border-kona col-span-3 my-8 text-2xl">
              Organisations
            </h1>
            <p className="mb-6">
              Please find below the list of organisations. You can use our
              filters to refine the list and click on each organisation to have
              more details.
            </p>
            <OrganisationsTable />
          </div>
        </div>
      </main>
    </DocumentTitle>
  );
}
