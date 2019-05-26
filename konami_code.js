const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init()
{
  let index = 0;

  document.body.addEventListener("keydown", (event) =>
  {
    const key = event.key;

    index = (codes[index] === key) ? ++index : 0;


    if (index === codes.length)
    {
      window.alert("Hurray!");
      index = 0;
    }

  });
}
//
// // Keys for A, B, and C keys.
// const alphabet = ['a', 'b', 'c'];
//
// // Keep track of index outside of the event handler.
// let index = 0;
//
// // This is the function that would be invoked by the event listener.
// function onKeyDownHandler(event)
// {
//   const key = event.key;
//
//   if (key === alphabet[index])
//   {
//     index++;
//
//     if (index === alphabet.length)
//     {
//       alert("Hurray!");
//
//       index = 0;
//     }
//   }
//   else
//   {
//     index = 0;
//   }
// }
