type BreadcrumbProps = {
  pageName: string;
  description?: string;
};

const Breadcrumb = ({ pageName, description }: BreadcrumbProps) => {
  return (
    <section className="relative z-10 bg-gradient-to-br from-white via-blue-50 to-white py-20 text-center overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          {pageName}
        </h1>
        {description && (
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Optional soft gradient glow behind title */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl z-[-1]" />
    </section>
  );
};

export default Breadcrumb;
