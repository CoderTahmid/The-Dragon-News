import {FiBookmark, FiShare2, FiEye} from "react-icons/fi";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import { Link } from "react-router-dom";

function formatDate(d) {
	try {
		const date = new Date(d);
		return date.toLocaleDateString(undefined, {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		});
	} catch {
		return d;
	}
}

function Stars({value = 0}) {
	const full = Math.floor(value);
	const half = value - full >= 0.5;
	const stars = Array.from({length: 5}).map((_, i) => {
		const idx = i + 1;
		if (idx <= full) return <AiFillStar key={idx} className="w-5 h-5" />;
		if (idx === full + 1 && half)
			return (
				<span key={idx} className="relative w-5 h-5 inline-block">
					<AiFillStar className="absolute inset-0 w-5 h-5 clip-half" />
					<AiOutlineStar className="absolute inset-0 w-5 h-5" />
				</span>
			);
		return <AiOutlineStar key={idx} className="w-5 h-5" />;
	});
	return <div className="flex items-center text-warning [--tw-text-opacity:1]">{stars}</div>;
}

// export default function NewsCard({data = onShare, onBookmark, onReadMore}) {
export default function NewsCard({news}) {
	const {others_info, rating, total_view, title, author, image_url, details, tags = []} = news || {};

	return (
		<div className="card bg-base-100 border border-base-200 shadow-xl">
			<div className="card-body p-6">
				{/* Header */}
				<div className="flex items-start justify-between gap-4">
					<div className="flex items-center gap-3">
						<div className="avatar">
							<div className="w-11 rounded-full ring ring-base-300 ring-offset-2">
								<img src={author?.img} alt={author?.name || "Author avatar"} />
							</div>
						</div>
						<div>
							<p className="font-semibold leading-none">{author?.name}</p>
							<p className="text-sm text-base-content/60 mt-0.5">{formatDate(author?.published_date)}</p>
						</div>
						{others_info?.is_trending && <span className="badge badge-warning badge-outline ml-1">Trending</span>}
					</div>

					<div className="flex items-center gap-1">
						<button className="btn btn-ghost btn-sm" aria-label="Bookmark">
							<FiBookmark className="w-5 h-5" />
						</button>
						<button className="btn btn-ghost btn-sm" aria-label="Share">
							<FiShare2 className="w-5 h-5" />
						</button>
					</div>
				</div>

				{/* Title */}
				<h2 className="mt-2 text-2xl md:text-3xl font-extrabold leading-tight">{title}</h2>

				{/* Media */}
				{image_url && (
					<figure className="mt-4 overflow-hidden rounded-2xl">
						<img src={image_url} className="w-full object-cover aspect-[16/9]" alt="Article visual" />
					</figure>
				)}

				{/* Body */}
				{details && <p className="mt-4 text-base-content/70">{details.length > 280 ? details.slice(0, 280) + "…" : details}</p>}

				{/* Tags + Read more */}
				<div className="mt-3 flex flex-wrap items-center gap-2">
					{tags.map((t) => (
						<span key={t} className="badge badge-ghost">
							{t}
						</span>
					))}
				</div>

				<div className="mt-2">
					<Link to={`/news/${news._id}`} className="btn btn-link no-underline p-0">
						Read More
					</Link>
				</div>

				<div className="divider"></div>

				{/* Footer */}
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Stars value={rating?.number || 0} />
						<span className="ml-1 font-medium">{rating?.number?.toFixed?.(1) ?? "0.0"}</span>
						{rating?.badge && <span className="badge badge-success badge-outline ml-1">{rating.badge}</span>}
					</div>

					<div className="flex items-center gap-2 text-base-content/70">
						<FiEye className="w-5 h-5" />
						<span className="font-medium">{total_view ?? 0}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

/*
  NOTES
  -----
  • Uses DaisyUI components (card, badge, btn, divider, avatar) with Tailwind utilities.
  • Swap `data` prop with your actual API payload; the component ships with a sample object for quick preview.
  • Hook up onShare/onBookmark/onReadMore as needed.
  • The half-star visual uses a tiny CSS trick via `clip-half`. Add this to your global CSS if desired:

    .clip-half { clip-path: inset(0 50% 0 0); }

*/
