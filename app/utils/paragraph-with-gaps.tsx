import React from "react";
export const ParagraphWithGaps = ({text, sentencesPerChunk = 4,
    }: {
    text: string;
    sentencesPerChunk: number;
    }) => {
    // Split by sentence endings
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text]; // fallback if match fails    
    const chunks = [];
    for (let i = 0; i < sentences.length; i += sentencesPerChunk) {
        chunks.push(sentences.slice(i, i + sentencesPerChunk).join(" "));
    }   
    return (
        <div>
        {chunks.map((chunk, index) => (
            <div key={index} style={{ marginBottom: "1.8em", lineHeight: "1.7" }}>
            {chunk}
            </div>
        ))}
        </div>
    );
};
