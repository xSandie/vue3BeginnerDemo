<template>
    <div id="guide" @click.prevent.stop="handleGuide">
        <svg-icon icon="guide"></svg-icon>
    </div> 
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import {steps} from './steps.js';
import i18n from '@/i18n/index.js';
import { watchLang } from '@/i18n/watchlang.js';
const t = i18n.global.t

let driver;
onMounted(() => {
    initDriver()
});

const initDriver = () => {
    driver = new Driver({
    // className: "scoped-class", // className to wrap driver.js popover
    animate: false, // Whether to animate or not
    opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
    padding: 10, // Distance of element from around the edges
    allowClose: true, // Whether the click on overlay should close or not
    overlayClickNext: false, // Whether the click on overlay should move next
    doneBtnText: t('driver.doneBtnText'), // Text on the final button
    closeBtnText: t('driver.closeBtnText'), // Text on the close button for this step
    stageBackground: "#ffffff", // Background color for the staged behind highlighted element
    nextBtnText: t('driver.nextBtnText'), // Next button text for this step
    prevBtnText: t('driver.prevBtnText'), // Previous button text for this step
    // showButtons: false, // Do not show control buttons in footer
    // keyboardControl: true, // Allow controlling through keyboard (escape to close, arrow keys to move)
    // scrollIntoViewOptions: {}, // We use `scrollIntoView()` when possible, pass here the options for it if you want any
    // onHighlightStarted: (Element) => {}, // Called when element is about to be highlighted
    // onHighlighted: (Element) => {}, // Called when element is fully highlighted
    // onDeselected: (Element) => {}, // Called when element has been deselected
    // onReset: (Element) => {}, // Called when overlay is about to be cleared
    // onNext: (Element) => {}, // Called when moving to next step on any step
    // onPrevious: (Element) => {}, // Called when moving to previous step on any step
  });
}
watchLang(initDriver)
const handleGuide = () => {
    driver.defineSteps(steps(t))
    driver.start()
}
</script>

<style scoped></style>
