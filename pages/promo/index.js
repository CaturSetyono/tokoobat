import { promoteCategory,promoteName } from "../../script/utils/productDisplay.js";
import { attachButtonListeners } from "../../script/utils/eventHandler.js";
document.addEventListener("DOMContentLoaded", () => {
    // Default tampilkan kategori
    promoteCategory("skincare");
    promoteName("Curology-moist");
    attachButtonListeners();
    });
