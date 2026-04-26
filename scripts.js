const exercises = [
    {
        id: 1,
        title: "Push Method",
        desc: "Create an array of 3 student names and add one more using push().",
        run: () => {
            let students = ["Amjid", "Alyas", "Rauf"];
            students.push("Javaid");
            return `Students: ${students.join(", ")}`;
        }
    },
    {
        id: 2,
        title: "Pop Method",
        desc: "Remove the last item from an array of fruits using pop().",
        run: () => {
            let fruits = ["mango", "strawberry", "apple", "banana"];
            let removed = fruits.pop(); // Fixed: pop() doesn't take arguments
            return `Removed: ${removed}. Remaining: ${fruits.join(", ")}`;
        }
    },
    {
        id: 3,
        title: "Unshift Method",
        desc: "Add 'Monday' to the beginning of a days array using unshift().",
        run: () => {
            let weekly = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            weekly.unshift("Monday");
            return `Weekly Days: ${weekly.join(", ")}`;
        }
    },
    {
        id: 4,
        title: "Shift Method",
        desc: "Remove the first item from an array of colors using shift().",
        run: () => {
            let colors = ["blue", "green", "red", "white", "black"];
            let removed = colors.shift(); // Fixed: shift() doesn't take arguments
            return `Removed: ${removed}. Remaining: ${colors.join(", ")}`;
        }
    },
    {
        id: 5,
        title: "Splice Insert",
        desc: "Use splice() to insert 'Math' and 'Science' at index 2 of a subjects array.",
        run: () => {
            let subjects = ["Urdu", "Chemistry", "Biology", "English"];
            subjects.splice(2, 0, "Math", "Science");
            return `Subjects: ${subjects.join(", ")}`;
        }
    },
    {
        id: 6,
        title: "Splice Remove",
        desc: "Use splice() to remove 2 elements starting from index 1 of a cities array.",
        run: () => {
            let cities = ["Karachi", "Quetta", "Multan", "Hyderabad"];
            let removed = cities.splice(1, 2);
            return `Removed: ${removed.join(", ")}. Remaining: ${cities.join(", ")}`;
        }
    },
    {
        id: 7,
        title: "Slice Method",
        desc: "Use slice() to get the first 3 items from a countries array.",
        run: () => {
            let countries = ["Pakistan", "Iran", "Afghanistan", "India", "Nepal", "Russia"];
            let firstThree = countries.slice(0, 3);
            return `First Three: ${firstThree.join(", ")}`;
        }
    },
    {
        id: 8,
        title: "Split Method",
        desc: "Convert string 'apple,banana,mango' into an array using split().",
        run: () => {
            let fruits = "apple,banana,mango";
            let arrayFruits = fruits.split(",");
            return `Array: [${arrayFruits.join(" - ")}]`;
        }
    },
    {
        id: 9,
        title: "Join Method",
        desc: "Join an array of characters ['J','S'] into a single string using join().",
        run: () => {
            let characters = ["J", "S"];
            let joined = characters.join("");
            return `Result: "${joined}"`;
        }
    },
    {
        id: 10,
        title: "Concat Method",
        desc: "Combine two arrays using concat().",
        run: () => {
            let combine1 = ["pen", "pencil"];
            let combine2 = ["eraser", "sharpener"];
            let combined = combine1.concat(combine2);
            return `Combined: ${combined.join(", ")}`;
        }
    },
    {
        id: 11,
        title: "Sort Numbers (Stringly)",
        desc: "Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).",
        run: () => {
            let numbers = [10, 5, 2, 8, 6, 4, 9];
            numbers.sort(); // Sorts as strings: 10, 2, 4, 5...
            return `Sorted (as strings): ${numbers.join(", ")}`;
        }
    },
    {
        id: 12,
        title: "Sort Alphabetically",
        desc: "Sort an array of names alphabetically using sort().",
        run: () => {
            let names = ["Javaid", "Raouf", "Sajid", "Majid", "Khalid", "Naseer", "Baqir", "Akbar"];
            names.sort();
            return `Sorted Names: ${names.join(", ")}`;
        }
    },
    {
        id: 13,
        title: "Reverse Method",
        desc: "Reverse the order of an array using reverse().",
        run: () => {
            let names = ["Akbar", "Baqir", "Javaid", "Khalid", "Majid", "Naseer", "Raouf", "Sajid"];
            names.reverse();
            return `Reversed: ${names.join(", ")}`;
        }
    },
    {
        id: 14,
        title: "IndexOf Method",
        desc: "Use indexOf() to find the index of 'blue' in a colors array.",
        run: () => {
            let colors = ["blue", "green", "red", "white", "black"];
            let index = colors.indexOf("blue");
            return `The index of 'blue' is: ${index}`;
        }
    },
    {
        id: 15,
        title: "Push to Empty",
        desc: "Add three new items to an empty array using push().",
        run: () => {
            let empty = [];
            empty.push("Colors", "Country", "Cities");
            return `Array: ${empty.join(", ")}`;
        }
    },
    {
        id: 16,
        title: "Remove Middle",
        desc: "Remove the middle item from an array of 5 numbers using splice().",
        run: () => {
            let numbers = [5, 2, 8, 6, 4];
            let removed = numbers.splice(2, 1);
            return `Removed: ${removed}. Remaining: ${numbers.join(", ")}`;
        }
    },
    {
        id: 17,
        title: "Split String",
        desc: "Convert 'HTML CSS JavaScript' string to an array.",
        run: () => {
            let str = "HTML CSS JavaScript";
            let arr = str.split(" ");
            return `Array: [${arr.join(" | ")}]`;
        }
    },
    {
        id: 18,
        title: "Reverse and Join",
        desc: "Reverse ['a', 'b', 'c'] and join with '-'.",
        run: () => {
            let arr = ['a', 'b', 'c'];
            arr.reverse();
            let result = arr.join("-");
            return `Result: ${result}`;
        }
    },
    {
        id: 19,
        title: "Check Existence",
        desc: "Check if 'Karachi' exists using indexOf().",
        run: () => {
            let cities = ["Quetta", "Multan", "Panjgur", "Gawadar", "Karachi", "Islamabad", "Lahore", "Hyderabad"];
            let index = cities.indexOf("Karachi");
            if (index !== -1) {
                return `Karachi found at index: ${index}`;
            } else {
                return "Karachi not found";
            }
        }
    },
    {
        id: 20,
        title: "Concat and Reverse",
        desc: "Concatenate even and odd numbers, then reverse.",
        run: () => {
            let even = [2, 4, 6, 8];
            let odd = [1, 3, 5, 7];
            let combined = even.concat(odd);
            combined.reverse();
            return `Result: ${combined.join(", ")}`;
        }
    }
];

function showOutput(text) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = text;
    outputDiv.style.display = 'block';
    setTimeout(() => {
        outputDiv.style.display = 'none';
    }, 5000);
}

function renderExercises() {
    const container = document.getElementById('exercises');
    exercises.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
            <h3>${ex.id}. ${ex.title}</h3>
            <p>${ex.desc}</p>
            <button onclick="runExercise(${ex.id})">Run Exercise</button>
            <div id="res-${ex.id}" style="margin-top: 10px; font-weight: bold; color: #28a745;"></div>
        `;
        container.appendChild(card);
    });
}

window.runExercise = (id) => {
    const ex = exercises.find(e => e.id === id);
    if (ex) {
        const result = ex.run();
        document.getElementById(`res-${id}`).innerText = "Result: " + result;
        showOutput("Exercise " + id + " completed!");
        console.log(`Exercise ${id}:`, result);
    }
};

document.addEventListener('DOMContentLoaded', renderExercises);
