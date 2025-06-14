import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold mb-4 text-red-600">
        404 - Page Not Found
      </h2>
      <p className="text-lg mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-600 hover:underline text-xl">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
