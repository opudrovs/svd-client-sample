const classNames = require('classnames');

import Page from 'components/shared/Page/Page';

import { ABOUT_PATH, FAQ_PATH } from 'constants/NavigationConstants';
import { COMPANY_NAME, PRODUCT_META_DESCRIPTION_END } from 'constants/TextConstants';

import styles from './FaqPage.module.scss';

/**
 * Container for the FAQ page.
 * Contains all other components on the page.
 */

const FaqPage = () => (
    <Page
        seoTitle={`Frequently Asked Questions - ${COMPANY_NAME}`}
        seoDescription={PRODUCT_META_DESCRIPTION_END}
        pathname={FAQ_PATH}
        externalContentClassName={styles.content}
    >
        <h1 className={styles.title}>Frequently Asked Questions</h1>

        <div className={styles.answer}>
            <h2 id="answer-1" className={styles.subtitle}><span className={styles.question}>1. How do you create your image packs?</span>
            </h2>

            <p>I create all image templates manually, with the help of Adobe Illustrator or Inkscape, then
                recolor
                them with my lists of carefully selected colors, and re-export them as SVG, PNG, and EPS
                image files
                with my custom scripts and command-line utilities to create image packs.</p>

            <p>This allows me to create large image packs and bundles without sacrificing image quality.</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.answer}>
            <h2 id="answer-2" className={styles.subtitle}><span className={classNames(
                styles.question,
                styles.highlighted
            )}>2. Can you develop a website for me or help me automate my graphic design tasks?</span></h2>

            <p>I would be delighted to! Please have a look at the <a href={ABOUT_PATH}>Hire Me!</a> page for more
                information.</p>

            <p>Please keep in mind that I specialize in custom web app/website development, when standard
                solutions
                just do not cut it.</p>

            <p>For a small E-commerce website with standard functionality, it may be much easier and faster
                to use a ready-made solution like Shopify, WordPress with WooCommerce, or even
                Squarespace.</p>

            <p>If you need a small static website, listing your products or services, I can create it for
                you in Gatsby/React. I have detailed the main benefits of a Gatsby website <a
                    href={`${ABOUT_PATH}#about-gatsby`}>here</a>.
            </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.answer}>
            <h2 id="answer-3" className={styles.subtitle}><span className={classNames(
                styles.question,
                styles.highlighted
            )}>3. Are payments for bundle and pack licenses
                            at {COMPANY_NAME} website secure?</span></h2>

            <p>Yes, all payments are powered by safe and secure <a href="https://www.paddle.com" rel="nofollow">
                Paddle.com
            </a> payment service.</p>

            <p>I do not have access to any sensitive payment information. I only receive the data which is
                required for fulfilling your order: your order number, name, email address, and the name of
                the product you purchased.</p>

            <p>All payments for bundle and pack licenses are non-recurring. You will only be charged
                once.</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.answer}>
            <h2 id="answer-4" className={styles.subtitle}><span className={classNames(
                styles.question,
                styles.highlighted
            )}>4. How will my purchase be delivered?</span></h2>

            <p>You will receive your download links after your purchase on the purchase success confirmation
                page and via email.</p>

            <p>You will be able to download ZIP archives with the images for which you purchased a license
                either
                directly from {COMPANY_NAME} website or from Dropbox.</p>

            <p>You can also sync the archives from the Dropbox download page to your Dropbox account
                (if you have enough space in it).</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.answer}>
            <h2 id="answer-5" className={styles.subtitle}><span className={styles.question}>5. Do you create all images at {COMPANY_NAME}'s
                            website
                            yourself?</span></h2>

            <p>Yes, I create all the image templates single-handedly, and tweak and export them as packs
                with the
                help of my custom
                scripts and utilities.</p>

            <p>This helps ensure image quality, consistency, and unique <a href="#answer-6">theming
                capabilities</a>.</p>


            <p>If I use any third-party products, like glitter textures in the upcoming textured packs, I
                always
                license them for my own use with a commercial or extended license which supports using them
                in
                multiple
                end products for sale.</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.answer}>
            <h2 id="answer-6" className={styles.subtitle}><span className={styles.question}>6. How can I combine backgrounds from different packs?</span>
            </h2>

            <p>You can easily mix and match:</p>

            <ul>
                <li>backgrounds with different patterns with the same color combo (for example, acid green
                    diagonal stripes
                    and acid green polka dot);
                </li>
                <li>backgrounds with the same pattern with different color combos (navy and living coral or
                    old gold stripes);
                </li>
                <li>backgrounds with patterns of the same type and different pattern size (tiny polka dot
                    and large
                    polka dot);
                </li>
                <li>backgrounds with the same pattern color and different background colors (pink lavender
                    chevron on white background and pink lavender pinstripe chevron on gray background).
                </li>
            </ul>

            <p>With the help of my background bundles, you can easily design a line of products with lots of
                variation yet consistent style.</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.answer}>
            <h2 id="answer-7" className={styles.subtitle}><span className={styles.question}>7. Can your seamless vector background packs be
                            used to
                            create
                            print-on-demand products, which will be printed all over?</span></h2>

            <p>Yes, they can! PNG images from any pack, which is marked as seamless, can be used to create
                such
                products.</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.answer}>
            <h2 id="answer-8" className={styles.subtitle}><span className={styles.question}>8. Why are your background packs called "digital
                            papers"?</span></h2>

            <p>It means that PNG images in the background packs and bundles are provided at 3600 x 3600 px
                image size and 300 DPI resolution, optimized for printing at 12 x 12&quot; size. It is the
                most popular background image size used in
                scrapbooking.</p>

            <p>1200 x 1200 px PNG images, which you can download and use for free (with attribution), have
                resolution of
                72 DPI, optimized for screen.</p>

            <p>SVG images in background packs and bundles have 3600 x 3600 artboard ("viewBox") size and can
                be resized to
                any size supported by your vector graphic editor without losing image quality.</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.answer}>
            <h2 id="answer-9" className={styles.subtitle}><span className={styles.question}>9. How can I use a pattern from your vector
                            background
                            images separately
                            from
                            the image background? I have my own background on which I would like to overlay your
                            pattern.</span></h2>

            <p>There are two or three layers in each SVG background image. You can easily open each SVG
                image in any
                vector graphic editor and delete the background layer white keeping the pattern.</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.answer}>
            <h2 id="answer-10" className={styles.subtitle}><span className={styles.question}>10. Why are SVG images from Tiny Hearts background
                            pack
                            incompatible with Adobe Illustrator?</span></h2>

            <p>There is a known issue with Adobe Illustrator that this software distorts some vector shapes,
                which are very small relative to the size of the artboard. Tiny Hearts vectors are identical
                to
                Medium or Large Hearts {COMPANY_NAME}'s vectors (which Adobe Illustrator can handle fine),
                just
                smaller. However, Adobe Illustrator distorts SVG shapes in Tiny Hearts vectors when
                re-exporting
                them as SVG or PNG images directly from Adobe Illustrator.</p>

            <p>Thus, you can just use free Inkscape vector graphic editor or different vector-editing
                software to
                edit and re-export Tiny Hearts vectors.</p>

            <p>PNG images from the Tiny Hearts backgrounds pack are compatible with any popular graphic
                editor,
                including Adobe Illustrator.</p>

            <p>All other vector background packs from {COMPANY_NAME} are compatible with Adobe
                Illustrator.</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.answer}>
            <h2 id="answer-11" className={styles.subtitle}><span className={styles.question}>11. Why is Marsala color in 250 color background
                            packs not
                            like Marsala
                            Color of the Year 2015?</span></h2>

            <p>Marsala Color of the Year 2015 is a proprietary Pantone color. It is darker and more wine-ish
                than
                the regular Marsala color. Marsala color used in my background packs is the regular Marsala
                color
                present in several color lists. It is more pink/brown than the Marsala Pantone color.</p>
        </div>
    </Page>
);

export default FaqPage;
