

const no_reward_container = document.getElementById('no-reward-container');
const no_reward = document.getElementById('no-reward-button');
const no_reward_selected = document.getElementById('no-reward-selected');

const bamboo_container = document.getElementById('bamboo-container');
const bamboo_button = document.getElementById('bamboo-stand-button');
const bamboo_selected = document.getElementById('bamboo-selected');

const black_edition_container = document.getElementById('black-edition-container');
const black_edition_button = document.getElementById('black-edition-button');
const black_edition_selected = document.getElementById('black-edition-selected');

const mahogany_container = document.getElementById('mahogany-container');
const mahogany_button = document.getElementById('mahogany-button');
const mahogany_selected = document.getElementById('mahogany-selected');
const mahogany_left = document.getElementById('mahogany-left');

const no_reward_hr = document.getElementById('no-reward-hr');
const bamboo_hr = document.getElementById('bamboo-hr');
const black_edition_hr = document.getElementById('black-edition-hr');
const mahogany_hr = document.getElementById('mahogany-hr');



const total = document.getElementById('total-backed');
const total_amount = document.getElementById('total-amount');

let new_total = total.innerHTML.replace(',', "");

const completed_visual = document.getElementById('completed-visual-id');
completed_visual.style.width = '50%';


let pledge = 0;


no_reward.addEventListener('click', () => {
  no_reward.classList.toggle('button-background');
  no_reward_container.classList.toggle('modal-container-border');
  no_reward_selected.classList.toggle('hidden');
  no_reward_hr.classList.toggle('opacity');
})

bamboo_button.addEventListener('click', () => {
  bamboo_button.classList.toggle('button-background');
  bamboo_container.classList.toggle('modal-container-border');
  bamboo_selected.classList.toggle('hidden');
  bamboo_hr.classList.toggle('opacity');
})

black_edition_button.addEventListener('click', () => {
  black_edition_button.classList.toggle('button-background');
  black_edition_container.classList.toggle('modal-container-border');
  black_edition_selected.classList.toggle('hidden');
  black_edition_hr.classList.toggle('opacity');
})

mahogany_button.addEventListener('click', () => {
  mahogany_button.classList.toggle('button-background');
  mahogany_container.classList.toggle('modal-container-border');
  mahogany_selected.classList.toggle('hidden');
  mahogany_hr.classList.toggle('opacity');
})



//////// Modal cont. button

const cont = document.getElementById('cont');
const modal_id = document.getElementById('modal-id');
const completed_id = document.getElementById('completed-id');


cont.addEventListener('click', () => {
  setTimeout(() => {
    modal_id.classList.toggle('active');
  }, 1000)

  setTimeout(() => {
    completed_id.classList.toggle('completed-hidden');
  }, 1500)

  pledge++;
  let updated_number = number(pledge);
  setTimeout(() => {
    total.innerHTML = updated_number;
  }, 2000)
})

const bamboo_cont = document.getElementById('bamboo-cont');
const bamboo_alert = document.getElementById('bamboo-alert');
const bamboo_pledge_left = document.getElementsByClassName('bamboo-pledge-left');


bamboo_cont.addEventListener('click', () => {

  let user_amount = document.getElementById('bamboo-user-amount').value;
  if (parseInt(user_amount) >= 25 && !user_amount.includes('.') && !user_amount.includes('+') && !user_amount.includes('-') && !user_amount.includes('e')) {

    bamboo_alert.style.display = 'none';
    setTimeout(() => {
      modal_id.classList.toggle('active');
    }, 1000)

    setTimeout(() => {
      completed_id.classList.toggle('completed-hidden');
    }, 1500)

    pledge++;
    let updated_number = number(pledge);
    setTimeout(() => {
      total.innerHTML = updated_number;
    }, 2000)


    let updated_amount = calculate_amount(user_amount);
    setTimeout(() => {
      total_amount.innerHTML = updated_amount;
    }, 2000)


    let completed_width = (parseInt(updated_amount.replaceAll(',', "")) / 100000) * 100;
    setTimeout(() => {
      completed_visual.style.width = `${completed_width}%`;
    }, 2000)

    pledge_left(bamboo_pledge_left, pledge);

    zero_pledge_bamboo();

  }
  else {
    bamboo_alert.style.display = 'block';
  }

})



const blackEdition_pledge_left = document.getElementsByClassName('blackEdition-pledge-left');
const black_edition_cont = document.getElementById('black-edition-cont');
const black_edition_alert = document.getElementById('blackEdition-alert');




black_edition_cont.addEventListener('click', () => {

  let user_amount = document.getElementById('blackEdition-user-amount').value;
  if (parseInt(user_amount) >= 75 && !user_amount.includes('.') && !user_amount.includes('+') && !user_amount.includes('-') && !user_amount.includes('e')) {

    black_edition_alert.style.display = 'none';
    setTimeout(() => {
      modal_id.classList.toggle('active');
    }, 1000)

    setTimeout(() => {
      completed_id.classList.toggle('completed-hidden');
    }, 1500)

    pledge++;
    let updated_number = number(pledge);
    setTimeout(() => {
      total.innerHTML = updated_number;
    }, 2000)


    let updated_amount = calculate_amount(user_amount);
    setTimeout(() => {
      total_amount.innerHTML = updated_amount;
    }, 2000)


    let completed_width = (parseInt(updated_amount.replaceAll(',', "")) / 100000) * 100;
    setTimeout(() => {
      completed_visual.style.width = `${completed_width}%`;
    }, 2000)

    pledge_left(blackEdition_pledge_left, pledge);
    zero_pledge_blackEdition();

  }
  else {
    black_edition_alert.style.display = 'block';
  }

})


const mahogany_pledge_left = document.getElementsByClassName('mahogany-pledge-left');
const mahogany_cont = document.getElementById('mahogany-cont');
const mahogany_alert = document.getElementById('mahogany-alert');

mahogany_cont.addEventListener('click', () => {

  let user_amount = document.getElementById('mahogany-user-amount').value;
  if (parseInt(user_amount) >= 200 && !user_amount.includes('.') && !user_amount.includes('+') && !user_amount.includes('-') && !user_amount.includes('e')) {

    mahogany_alert.style.display = 'none';
    setTimeout(() => {
      modal_id.classList.toggle('active');
    }, 1000)

    setTimeout(() => {
      completed_id.classList.toggle('completed-hidden');
    }, 1500)

    pledge++;
    let updated_number = number(pledge);
    setTimeout(() => {
      total.innerHTML = updated_number;
    }, 2000)


    let updated_amount = calculate_amount(user_amount);
    setTimeout(() => {
      total_amount.innerHTML = updated_amount;
    }, 2000)


    let completed_width = (parseInt(updated_amount.replaceAll(',', "")) / 100000) * 100;
    setTimeout(() => {
      completed_visual.style.width = `${completed_width}%`;
    }, 2000)

    pledge_left(mahogany_pledge_left, pledge);
    zero_pledge_mahogany();

  }
  else {
    mahogany_alert.style.display = 'block';
  }

})
// 

const bamboo_pledge_left_id = document.getElementById(`bamboo-pledge-left-id`);
const mahogany_pledge_left_id = document.getElementById(`mahogany-pledge-left-id`);
const blackEdition_pledge_left_id =  document.getElementById(`blackEdition-pledge-left-id`);



// learnings
const number = (pledge) => {
  let final_total = parseInt(new_total) + pledge;

  let new_string = final_total.toString();

  for (let i = 3; i < new_string.length; i = i + 3) {
    new_string = new_string.slice(0, -i) + "," + new_string.slice(-i);
  }
  return (new_string)
}

const calculate_amount = (user_amount) => {

  let new_amount = total_amount.innerHTML.replace(',', "");
  let final_amount = parseInt(new_amount) + parseInt(user_amount);
  let final_amount_string = final_amount.toString();

  for (let i = 3; i < final_amount_string.length; i = i + 3) {
    final_amount_string = final_amount_string.slice(0, -i) + "," + final_amount_string.slice(-i);
  }
  return final_amount_string;
}

const pledge_left = (type_of_pledge, pledge) => {
  for (let i = 0; i < type_of_pledge.length; i++) {
    let left = parseInt(type_of_pledge[i].innerHTML) - 1;
    type_of_pledge[i].innerHTML = left;
  }
}


const bamboo_select_button = document.getElementById('bamboo-select-button');
const zero_pledge_bamboo = () => {
  for (let i = 0; i < bamboo_pledge_left.length; i++) {
    if (bamboo_pledge_left[i].innerHTML === '0') {
      bamboo_pledge_left_id.style.opacity = '0.5';
      bamboo_container.style.opacity = '0.5';
      bamboo_cont.disabled = true;
      bamboo_select_button.disabled = true;
    }
  }
}

const mahogany_select_button = document.getElementById('mahogany-select-button');
const zero_pledge_mahogany = () => {
  for (let i = 0; i < mahogany_pledge_left.length; i++) {
    if (mahogany_pledge_left[i].innerHTML === '0') {
      mahogany_pledge_left_id.style.opacity = '0.5';
      mahogany_container.style.opacity = '0.5';
      mahogany_cont.disabled = true;
      mahogany_select_button.disabled = true;
    }
  }
}

const blackEdition_select_button = document.getElementById('blackEdition-select-button');
const zero_pledge_blackEdition = () => {
  for (let i = 0; i < blackEdition_pledge_left.length; i++) {
    if (blackEdition_pledge_left[i].innerHTML === '0') {
      blackEdition_pledge_left_id.style.opacity = '0.5';
      black_edition_container.style.opacity = '0.5';
      black_edition_cont.disabled = true;
      blackEdition_select_button.disabled = true;
    }
  }
}
///

const completed_button = document.getElementById('completed-button-id')

const bookmark_content = document.getElementById('bookmark-content');

completed_button.addEventListener('click', () => {
  document.getElementById('completed-id').classList.toggle('completed-hidden');
})



const back_button = document.getElementById('back-button-id');
back_button.addEventListener('click', () => {
  document.getElementById('modal-id').classList.toggle('active');
})

const close_icon = document.getElementById('modal-close')
close_icon.addEventListener('click', () => {
  document.getElementById('modal-id').classList.toggle('active');
})

const bookmark_button = document.getElementById('bookmark-id')
bookmark_button.addEventListener('click', () => {
  bookmark_button.classList.toggle('bookmarked-button');
  bookmark_content.classList.toggle('switch-bookmarked');
})



////// Mobile

const mobile_menu = document.getElementById('mobile-menu-icon');
const mobile_menu_navigation = document.getElementById('mobile-menu-id');

mobile_menu.addEventListener('click', () => {
  mobile_menu_navigation.classList.toggle('mobile-menu-display');
  if (mobile_menu_navigation.classList.contains('mobile-menu-display')) {
    mobile_menu.src = `images/icon-close-menu.svg`;
  } else {
    mobile_menu.src = `images/icon-hamburger.svg`;
  }
})


const reward_button = document.getElementsByClassName('reward-button');

for (let index = 0; index < reward_button.length; index++) {
  reward_button[index].addEventListener('click',()=>{
    modal_id.classList.toggle('active');
  })
}


const time_left = document.getElementById('time-left');
const duration = ()=>{
  let date = new Date();
  let day = date.getDate();
  let days_left = 31-day;

  time_left.innerHTML = days_left;
}

duration();

///////////END\\\\\\\\\\\\\\\\\

//  practise code


// const number = (pledge) => {
//   let final_total = parseInt(new_total) + pledge;

//   let new_string = final_total.toString();

//   for (let i = 3; i < new_string.length; i = i + 3) {
//     new_string = new_string.slice(0, -i) + "," + new_string.slice(-i);
//   }
//   return (new_string)
// }

// const calculate_amount = (user_amount) => {

//   let new_amount = total_amount.innerHTML.replace(',', "");
//   let final_amount = parseInt(new_amount) + parseInt(user_amount);
//   let final_amount_string = final_amount.toString();

//   for (let i = 3; i < final_amount_string.length; i = i + 3) {
//     final_amount_string = final_amount_string.slice(0, -i) + "," + final_amount_string.slice(-i);
//   }
//   return final_amount_string;
// }

// const pledge_left = (type_of_pledge, pledge) => {
//   for (let i = 0; i < type_of_pledge.length; i++) {
//     let left = parseInt(type_of_pledge[i].innerHTML) - 1;
//     type_of_pledge[i].innerHTML = left;
//   }
// }


// const bamboo_select_button = document.getElementById('bamboo-select-button');
// const zero_pledge_bamboo = () => {
//   for (let i = 0; i < bamboo_pledge_left.length; i++) {
//     if (bamboo_pledge_left[i].innerHTML === '0') {
//       bamboo_pledge_left_id.style.opacity = '0.5';
//       bamboo_container.style.opacity = '0.5';
//       bamboo_cont.disabled = true;
//       bamboo_select_button.disabled = true;
//     }
//   }
// }

// const mahogany_select_button = document.getElementById('mahogany-select-button');
// const zero_pledge_mahogany = () => {
//   for (let i = 0; i < mahogany_pledge_left.length; i++) {
//     if (mahogany_pledge_left[i].innerHTML === '0') {
//       mahogany_pledge_left_id.style.opacity = '0.5';
//       mahogany_container.style.opacity = '0.5';
//       mahogany_cont.disabled = true;
//       mahogany_select_button.disabled = true;
//     }
//   }
// }

// const blackEdition_select_button = document.getElementById('blackEdition-select-button');
// const zero_pledge_blackEdition = () => {
//   for (let i = 0; i < blackEdition_pledge_left.length; i++) {
//     if (blackEdition_pledge_left[i].innerHTML === '0') {
//       blackEdition_pledge_left_id.style.opacity = '0.5';
//       black_edition_container.style.opacity = '0.5';
//       black_edition_cont.disabled = true;
//       blackEdition_select_button.disabled = true;
//     }
//   }
// }