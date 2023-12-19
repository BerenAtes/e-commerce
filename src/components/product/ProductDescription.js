import { Link } from "react-router-dom";

export default function ProductDescription() {
  return (
    <>
      <div>
        <Link>Description</Link>
        <Link>Additional Information</Link>
        <Link>
          Rewievs <span>(0)</span>
        </Link>
      </div>
    </>
  );
}
