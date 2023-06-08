import SectionTitle from "../../../components/SectionTitle";

const FAQ = () => {
    return (
        <div className="mx-auto container mb-28">
            <SectionTitle
                heading={"Frequently Asked Questions (FAQ)"}
                subheading={"Find Answers to Common Inquiries"}
            ></SectionTitle>
            <div className="w-8/12 mx-auto flex flex-col gap-4">
            <div className="collapse collapse-plus bg-base-200 border-cyan-800 border">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-cyan-400 text-xl font-medium">
                    How long does it take to learn the violin?
                </div>
                <div className="collapse-content">
                    <p>The time it takes to learn the violin varies depending on several factors, including practice consistency, previous musical experience, and individual aptitude. With regular practice and proper guidance, one can start playing simple tunes within a few months, but mastery often takes years of dedicated practice.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 border-cyan-800 border">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-cyan-400 text-xl font-medium">
                    What should I consider when choosing a keyboard for beginners?

                </div>
                <div className="collapse-content">
                    <p>When choosing a keyboard for beginners, consider factors such as the number of keys (full-size or smaller), touch sensitivity, built-in sounds and effects, portability, and connectivity options. Its also important to ensure that the keyboard has a solid key action and offers a comfortable playing experience.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 border-cyan-800 border">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-cyan-400 text-xl font-medium">
                    How often should I practice the guitar?
                </div>
                <div className="collapse-content">
                    <p>Consistency is key when it comes to guitar practice. Aim to practice regularly, ideally every day or at least several times a week. Starting with shorter practice sessions (15-30 minutes) and gradually increasing the duration as you progress can be an effective approach. Remember to focus on quality practice by setting goals, working on specific techniques, and learning new songs to keep your practice sessions engaging.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FAQ;