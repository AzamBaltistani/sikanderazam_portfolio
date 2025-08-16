import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import type { KeenSliderInstance } from "keen-slider/react"

interface CarouselProps {
    images: string[];
    isOdd: boolean;
}

function AutoplayPlugin(ms = 3000, pauseOnHover = true) {
    return (slider: KeenSliderInstance) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false

        function clearNextTimeout() {
            clearTimeout(timeout)
        }
        function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
                slider.next()
            }, ms)
        }

        slider.on("created", () => {
            if (pauseOnHover) {
                slider.container.addEventListener("mouseenter", () => {
                    mouseOver = true
                    clearNextTimeout()
                })
                slider.container.addEventListener("mouseleave", () => {
                    mouseOver = false
                    nextTimeout()
                })
            }
            nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
    }
}

const ScreenshotsBox = ({ images, isOdd }: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const additionalTime = isOdd ? 100 : 0;

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        rubberband: false,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
    }, [AutoplayPlugin(3000 + additionalTime)])

    const handlePrev = () => {
        instanceRef.current?.prev()
    }

    const handleNext = () => {
        instanceRef.current?.next()
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            {/* Slider */}
            <div
                ref={sliderRef}
                className="keen-slider h-full w-full overflow-hidden "
            >
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className="keen-slider__slide flex items-center justify-center "
                    >
                        <img
                            src={src}
                            alt={`Slide ${idx}`}
                            className="h-full w-fit object-contain hover:cursor-grab rounded-2xl"
                        />
                    </div>
                ))}
            </div>

            {/* Controls under the slider */}
            <div className="flex items-center gap-4 mt-0.5 md:mt-1">
                <button
                    onClick={handlePrev}
                    className="rounded-full p-0.5 md:p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                >
                    <ChevronLeft className="h-2 md:h-4 w-2 md:w-4 text-black dark:text-white" />
                </button>

                <span className="text-xs font-light md:text-sm md:font-medium text-black dark:text-white">
                    {currentSlide + 1} of {images.length}
                </span>

                <button
                    onClick={handleNext}
                    className="rounded-full p-0.5 md:p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                >
                    <ChevronRight className="h-2 md:h-4 w-2 md:w-4 text-black dark:text-white" />
                </button>
            </div>
        </div>
    )
}

export default ScreenshotsBox
