document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".post-card");
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => {
                btn.setAttribute("aria-pressed", "false");
                btn.style.color = "var(--gray-400)";
            });

            button.setAttribute("aria-pressed", "true");
            button.style.color = "#f8f8f2";

            const filter = button.dataset.filter;

            cards.forEach((card) => {
                const tags = card.getAttribute("data-tags").split(" ");
                if (filter === "all" || tags.includes(filter)) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

    const initialFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (initialFilterBtn) {
        initialFilterBtn.click();
    }
});
