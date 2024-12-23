// 折疊QA => Accordion
// https://motion.dev/docs/react-quick-start
// npm install motion

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";


export default function App() {

    // 作用中的變數
    const [activeQuestion, setActiveQuestion] = useState(null);

    // FAQ資料
    const questions = [
        {
            id: 1,
            question: "題目1",
            answer: "答案1",
        },
        {
            id: 2,
            question: "題目2",
            answer: "答案2",
        },
        {
            id: 3,
            question: "題目3",
            answer: "答案3",
        },
    ];

    return (
        <div style={{
            maxWidth: "100vw",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border:"1px solid red",
        }}>
            <div style={{
                width: "90%",
                margin: "auto",
                maxWidth: "1400px",
                backgroundColor: "gray",
                padding: "8px",
                borderRadius: "5px",
            }}>
                {/* FAQ標題 */}
                <h2 style={{
                    textAlign: "center",
                    marginBottom: "6px",
                }}>FAQ標題</h2>

                {
                    // 帶出陣列中的資料
                    questions.map((q) => {
                        return (
                            <div key={q.id} style={{
                                marginBottom: "4px",
                            }}>
                                <button
                                    style={{
                                        width: "100%",
                                        textAlign: "left",
                                        border: "none",
                                        outline: "none",
                                        padding: "4px",
                                        borderRadius: "2px",
                                        backgroundColor: "#ccc",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        justifyItems: "center",
                                    }}
                                    onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}
                                >
                                    {/* 帶出題目 */}
                                    {q.question}
                                    {/* +, - 鈕的toggle */}
                                    {activeQuestion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
                                </button>
                                {/* 折疊鈕動畫 */}
                                <AnimatePresence>
                                    {
                                        activeQuestion === q.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                style={{ marginTop: "5px", color: "#ccc" }}
                                            >
                                                {/* 答案 */}
                                                {q.answer}
                                            </motion.div>
                                        )
                                    }
                                </AnimatePresence>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}