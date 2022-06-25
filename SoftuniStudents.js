function softuniStudents(arr) {

    let courses = {};

    while (arr.length > 0) {

        let line = arr.shift();

        if (line.includes(':')) {
            line = line.split(': ');
            let courseName = line[0];
            let courseCapacity = Number(line[1]);

            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = {};

                courses[courseName]['capacity'] = 0;
                courses[courseName]['students'] = [];
            }

            courses[courseName]['capacity'] += courseCapacity;

        } else {

            line = line.split(' ');
            let userAndCredits = line[0];
            let emailAddress = line[3];
            let wishedCourse = line[5];

            if (courses.hasOwnProperty(wishedCourse)) {

                if (courses[wishedCourse]['capacity'] > 0) {
                    userAndCredits = userAndCredits.split('[');
                    let userName = userAndCredits[0];
                    let credits = Number(userAndCredits[1].slice(0, userAndCredits[1].length - 1));

                    courses[wishedCourse]['students'].push({ userName, credits, emailAddress });
                    courses[wishedCourse]['capacity'] -= 1;

                }
            }
        }
    }

    let sortedByCountOfStudents = Object.keys(courses)
        .sort((a, b) => courses[b]['students'].length - courses[a]['students'].length);

    sortedByCountOfStudents.map(course => {

        console.log(`${course}: ${courses[course]['capacity']} places left`);

        let studentsInCourse = courses[course]['students'];
        let sortedStudents = studentsInCourse.sort((a, b) => b.credits - a.credits);

        sortedStudents.map(student => console.log(`--- ${student.credits}: ${student.userName}, ${student.emailAddress}`));
    });
}
softuniStudents(['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']
);