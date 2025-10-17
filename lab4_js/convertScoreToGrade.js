/**
 * @param {number} score - Числовий рейтинг студента (0-100).
 * @returns {string} Літерна оцінка або 'INVALID SCORE'.
 */
function convertScoreToGrade_Switch(score) {
  if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  }

  switch (true) {
    case (score >= 90): // 100 - 90
      return 'A';
    case (score >= 83): // 89 - 83
      return 'B';
    case (score >= 76): // 82 - 76
      return 'C';
    case (score >= 70): // 75 - 70
      return 'D';
    case (score >= 60): // 69 - 60
      return 'E';
    case (score >= 35): // 59 - 35
      return 'Fx';
    default:            // 34 - 0
      return 'F';
  }
}

console.log(convertScoreToGrade_Switch(75)); // --> 'D'