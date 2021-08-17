module.exports = (search) => {
  search = Object.values(search).pop();
  if (!search || search.length > 1) {
    search = "#";
  }
  let nums = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"],
    ],
    chars = [
      {
        num: 2,
        chars: ["a", "b", "c"],
      },
      {
        num: 3,
        chars: ["d", "e", "f"],
      },
      {
        num: 4,
        chars: ["g", "h", "i"],
      },
      {
        num: 5,
        chars: ["j", "k", "l"],
      },
      {
        num: 6,
        chars: ["m", "n", "o"],
      },
      {
        num: 7,
        chars: ["p", "q", "r", "s"],
      },
      {
        num: 8,
        chars: ["t", "u", "v"],
      },
      {
        num: 9,
        chars: ["w", "x", "y", "z"],
      },
    ];

  function find_element(search) {
    let index_x = nums.findIndex((arr) => arr.includes(search));
    index_y = nums[index_x].indexOf(search);

    return [index_x + 1, index_y + 1];
  }

  function find_char(char) {
    return chars.find((obj) => obj.chars.includes(char.toLowerCase())).num;
  }
  let is_num = /\d/;
  if (search == "*" || search == "#") {
    console.log(find_element(search));
  } else if (is_num.test(search)) {
    console.log(find_element(parseInt(search)));
  } else {
    console.log(find_element(find_char(search)));
  }
};
