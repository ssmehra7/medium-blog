import { AppBar } from "../components/Blog/AppBar";

export const Ourstory = () => {
    return (
        <div className="bg-yellow-500 min-h-screen">
            <div className="border-b-2 border-black">
                <AppBar />
            </div>
            <div className="flex justify-start flex-col gap-8 mt-8 mx-14 font-serif">
                <div className="text-5xl">
                    Everyone has a story to tell.
                </div>
                <div className="text-xl w-1/2">
                    Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.
                    <br/><br/>
                    We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.
                    <br/><br/>
                    Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.
                    <br/><br/>
                    Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.
                    <br/><br/>
                    Instead of selling ads or selling your data, we’re supported by a growing community of Medium members who align with our mission. If you’re new here, start exploring. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then share your own story.
                    <br/><br/>
                </div>
            </div>
        </div>
    );
};
