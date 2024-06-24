const chartEl = document.querySelector("#chart");
let chartHeight = 0;

function generateChartItem(item) {
  const isCurrentDay = (dayName) => {
    const today = new Date().getDay();
    const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return daysOfWeek[today] === dayName;
  };

  const currentDayClass = isCurrentDay(item.day)
    ? "bg-2-Cyan"
    : "bg-1-Soft-red";
  const barHeight = parseInt((item.amount / chartHeight) * 100);
  console.log(barHeight);

  return `<div class="relative flex-1 grid">
                <button class="peer grid gap-3" aria-label="${item.day}${
    item.amount
  }">
                    <div class="${currentDayClass} rounded-md" style="height: ${
    barHeight * 1.2
  }px"></div>
                    <p class="text-md text-4-Medium-brown mt-3">${item.day}</p>
                </button>
                <p class="transition-opacity duration-500 opacity-0  peer-hover:opacity-100 hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-3-Dark-brown text-6-Very-pale-orange text-xs p-1 rounded-md"
                aria-hidden="true">$${item.amount}</p>
           </div>`;
}

async function fetchChartData() {
  const chartFetch = await fetch("./data.json");
  const chartData = await chartFetch.json();
  const array = chartData.map((i) => parseInt(i.amount));
  chartHeight = Math.max(...array);

  chartEl.innerHTML = chartData.map((i) => generateChartItem(i)).join("");
}
fetchChartData();
