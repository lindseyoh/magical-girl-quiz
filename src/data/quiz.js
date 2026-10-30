export const quiz = {
    title: "slop magical girl quiz",
    results: {
        lunatic: { name: "LUNAT!C", description: "Spunky gorl"},
        repX: { name: "Reporter X", description: "Sass"},
        prince: { name: "Conductor: Prince", description: "9 yrs old and already too far gone"},
    },

    questions: [
        {
            text: "I fight…",
            answers: [
                { text: "Its expected of me", scores: { lunatic: 2} },
                { text: "For revenge", scores: { repX: 2} },
                { text: "For my entertainment", scores: { prince: 2} },
            ],

        },
        {
            text: "Some jackass reporter in heels is spreading some baaaad juju about you! What will you do?",
            answers: [
                { text: "Sass em", scores: { lunatic: 2} },
                { text: "I am the jackass reporter in heels", scores: { repX: 2} },
                { text: "cry", scores: { prince: 2} },
            ],

        },
        {
            text: "What will your side-plot-filler-episode look like?",
            answers: [
                { text: "The most unhinged, memeable, budget-wasting episode known to man", scores: { lunatic: 2} },
                { text: "Amending fences, or making a new friend", scores: { repX: 2} },
                { text: "An angsty flashback- dropping a massive lorebomb no one saw coming", scores: { prince: 2} },
            ],
        },
    ],
}