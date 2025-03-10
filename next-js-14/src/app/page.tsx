// import Link from "next/link";

// export default function Home() {
//     return (
//         <div>
//             안녕하세요. Next.js입니다! <br />
//             {/* <a href={"/test"}>a태그 : Test로 이동하기</a> */}
//             <Link href={"/test"}>Test로 이동하기</Link>
//         </div>
//     );
// }

"use client";

import { useRouter } from "next/navigation";

export default function Test() {
    const router = useRouter();

    const handleButtonClick = () => {
        setTimeout(() => {
            router.push("/test");
        }, 3000);
    };

    return <button onClick={handleButtonClick}>클릭!</button>;
}
