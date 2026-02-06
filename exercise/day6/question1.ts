class Student {
    name: string;
    email: string;
    age: Date;
    score: number;

    constructor(name: string, email: string, birthday: Date, score: number) {
        this.name = name;
        this.email = email;
        this.age = new Date(birthday);
        this.score = score;
    }

    getAge() {
        const ageDiff = Date.now() - this.age.getTime();
        const ageDate = new Date(ageDiff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

function average(students: Student[]) {
    let sumAge: number = 0;
    let sumScore: number = 0;
    let maxAge: number = students[0].getAge();
    let minAge: number = students[0].getAge();
    let maxScore: number = students[0].score;
    let minScore: number = students[0].score;

    for (const student of students) {
        sumScore += student.score;
        if (maxScore > student.score) maxScore = student.score;
        if (minScore < student.score) minScore = student.score;

        sumAge += student.getAge();
        if (maxAge > student.getAge()) maxAge = student.getAge();
        if (minAge < student.getAge()) minAge = student.getAge();
    }

    const meanScore: number = sumScore / students.length;
    const meanAge: number = sumAge / students.length;

    const result = {
        score: {
            highest: this.maxScore,
            lowest: this.minScore,
            average: this.meanScore,
        },
        age: {
            highest: this.maxAge,
            lowest: this.minAge,
            average: this.meanAge,
        },
    }

    return result;
}