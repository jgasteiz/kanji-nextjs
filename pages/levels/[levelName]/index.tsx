import Head from 'next/head';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import getLevel from "../../../services/getLevel";
import Link from "next/link";

const Level = () => {
    const router = useRouter();
    const levelName: string = router.query.levelName as string;

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
        return <p>No level found with name {levelName}</p>;
    }

    return (
        <div className="container">
            <Head>
                <title>Level {levelName}</title>
            </Head>

            <main className="pt-4 pb-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{levelName}</li>
                    </ol>
                </nav>

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


export default Level