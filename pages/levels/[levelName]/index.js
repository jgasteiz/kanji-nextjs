import Head from 'next/head';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import getLevel from "../../../services/getLevel";

export default function Level() {
    const router = useRouter();
    const { levelName } = router.query;
    const [level, setLevel] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        if (!levelName) {
            return;
        }
        getLevel(levelName)
            .then((level_) => {
                setLevel(level_);
                setLoading(false);
            })
    }, [levelName]);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (!level) {
        return <p>No level</p>;
    }

    return (
        <div className="container">
            <Head>
                <title>Level {levelName}</title>
            </Head>

            <main className="pt-4 pb-4">
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
            </main>
        </div>
    )
}
