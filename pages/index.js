import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import getLevels from "../services/getLevels";

export default function Home() {
    const [levels, setLevels] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        getLevels()
            .then((levels_) => {
                setLevels(levels_);
                setLoading(false);
            })
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (!levels) {
        return <p>No levels</p>;
    }

    return (
        <div className="container">
            <Head>
                <title>Kanji SRS</title>
            </Head>

            <main className="pt-4 pb-4">
                {levels.map((levelName) => {
                    return (
                        <div key={levelName}>
                            <Link href={`/levels/${levelName}/`}>
                                {levelName}
                            </Link>
                        </div>
                    );
                })}
            </main>
        </div>
    )
}
