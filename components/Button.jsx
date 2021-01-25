import Link from 'next/link';

export default function Button({ href, children, className }) {
    return (
        <Link href={href}>
            <a
                className={`${className} inline-block px-4 py-2 font-medium transition-shadow duration-100 rounded-md active:shadow-none hover:shadow-md border-thin`}
            >
                {children}
            </a>
        </Link>
    );
}