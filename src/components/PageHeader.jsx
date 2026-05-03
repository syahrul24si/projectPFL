export default function PageHeader({ title, breadcrumb, children }) {
  const renderBreadcrumb = () => {
    if (Array.isArray(breadcrumb)) {
      return breadcrumb.join(" / ");
    }

    return breadcrumb;
  };

  return (
    <div className="mb-6 flex items-start justify-between rounded-2xl bg-white p-5 shadow-sm">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          {title}
          <span className="text-yellow-400">.</span>
        </h1>
        <p className="mt-2 text-sm font-medium text-gray-500">
          {renderBreadcrumb()}
        </p>
      </div>

      <div>{children}</div>
    </div>
  );
}