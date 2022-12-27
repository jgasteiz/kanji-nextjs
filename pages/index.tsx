import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import getLevels from "../services/getLevels";

const Home = () => {
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
                <nav>
                    <ul className="nav nav-pills">
                        {levels.map((levelName) => {
                            return (
                                <li key={levelName} className="nav-item">
                                    <Link className="nav-link" href={`/levels/${levelName}/`}>
                                        {levelName}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </main>
        </div>
    )
}

export default Home