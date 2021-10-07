const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (students) =>{
    const male = [];
    const female = [];
    for(let element of students){
        if(element.endsWith("а")){
            female.push(element);
        }
        else{
            male.push(element);
        }
    }
    const workPairs = [];
    for(let i = 0; i < male.length; i++){
        workPairs.push(([male[i] + ' i ' + female[i]]));
    }
    return workPairs;
};
console.log(getPairs(students));

const getThemes = (themes) => { 
    const Pairs = [];
    const themesForStudents = [];
    for (let i = 0; i < themes.length; i++) {
        Pairs.push(getPairs(students)[i]);
        themesForStudents.push((Pairs[i]).concat(themes[i]));
    }

    return themesForStudents;
};
console.log(getThemes(themes));

const getMarksForStudent = (marks)=> {
    const studentMark = [];
    for(let i = 0; i < marks.length; i++){
        studentMark.push(students[i].split(" ").concat(marks[i]));
    }
    return studentMark;
};
console.log(getMarksForStudent(marks));


const getMarksForGroup = (group)=>{
  
    const randomMarks = [];
    
    for(let i = 1; i < marks.length; i++){
        
        randomMarks.push(Math.floor(Math.random() * marks.length));
        
    }
    const randomMarksForGroups = [];
    for(let i = 0; i < group.length; i++){
        randomMarksForGroups.push(group[i].concat(randomMarks[i]));
    }

    return randomMarksForGroups;
};
console.log(getMarksForGroup(getThemes(themes)));