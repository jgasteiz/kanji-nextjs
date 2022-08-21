import Head from 'next/head';
import { useState, useEffect } from 'react';
import getLevels from "../services/getLevels";

export default function Home() {
    const [levels, setLevels] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        getLevels()
            .then((data) => {
                setLevels({'data': data});
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
                {levels.data.map((level) => {
                    return (
                        <div key={level.name}>
                            {level.groups.map((group) => {
                                return (
                                    <div key={level.name + group.index}>
                                        {group.kanji_list.map((kanji, index) => {
                                            return (
                                                <div key={level.name + group.index + index} className="card mb-2">
                                                    <div className="card-body">
                                                        <h1 className="card-title">
                                                            {kanji.kanji}
                                                        </h1>
                                                        <h2 className="card-subtitle mb-4 text-muted">
                                                            {kanji.meaning}
                                                        </h2>
                                                        <p className="card-text">
                                                            {kanji.examples}
                                                        </p>
                                                        <p className="card-text">
                                                            {kanji.kun_yomi}
                                                        </p>
                                                        <p className="card-text">
                                                            {kanji.on_yomi}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        <hr/>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </main>
        </div>
    )
}
