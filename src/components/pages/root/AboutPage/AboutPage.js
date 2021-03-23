import Page from 'components/shared/Page/Page';

import { ABOUT_PATH, COMPANY_WEBSITE_URL } from 'constants/NavigationConstants';
import {
    COMPANY_NAME,
    COMPANY_EMAIL_JOB
} from 'constants/TextConstants';

import styles from './AboutPage.module.scss';

/**
 * Container for the About page.
 * Contains all other components on the page.
 */

const AboutPage = () => (
    <Page
        seoTitle={`React (Next.js or Gatsby) website development, graphic design automation, programmatic SEO - ${COMPANY_NAME}`}
        seoDescription="Custom software development services."
        pathname={ABOUT_PATH}
        externalContentClassName={styles.content}
    >
        <h1 className={styles.title}>Custom Software Development Services</h1>

        <h2 id="about-intro" className={styles.subtitle}>Who I Am</h2>

        <p>Hi, I am Olga, a Ukrainian web and mobile developer with BSc in Computer Engineering with Honors who
            worked remotely with leading US media companies and prominent startups. I am always on the lookout
            for new projects.</p>

        <h2 id="about-contact" className={styles.subtitle}>Contact Information</h2>

        <p>If you are interested in working with me, please drop me a message at <br className="d-md-none d-inline" /><a
            href={`mailto:${COMPANY_EMAIL_JOB}`}>{COMPANY_EMAIL_JOB}</a>.</p>

        <p>I am available for working with clients directly as well as collaborating or subcontracting with web
            development or digital agencies.</p>

        <p>Any intermediary, willing to subcontract their project to me, should represent an established
            agency or be an established freelance software developer.</p>

        <h2 id="about-next-js" className={styles.subtitle}>I Can Develop a React and Next.js Web App for
            You</h2>

        <p>I can help you</p>
        <ul>
            <li>build a new React/Next.js web app or website with SSR (server-side rendering, which is important
                for SEO);
            </li>
            <li>convert your existing vanilla JavaScript/jQuery web app to React;</li>
            <li>convert your purely client-side React web app to React and Next.js with server-side rendering;
            </li>
            <li>add new features to your existing React web app and (attempt to) fix bugs in your existing
                React/Next.js web app;
            </li>
            <li>develop a React Native mobile app based on your React web app.</li>
        </ul>

        <p>I have plenty of experience with software maintenance and fixing mission-critical issues.</p>

        <p>And I LOVE complex projects which require attention to detail.</p>

        <p>This website (<a href={COMPANY_WEBSITE_URL}>{COMPANY_WEBSITE_URL}</a>) was
            developed in React and Next.js with custom responsive design (Bootstrap grid with custom SCSS) and
            server-side rendering for all tens of thousands of product pages. The backend is split into two
            parts: a Node.js + Express.js part and a Next.js part. The website is hosted on a DigitalOcean
            droplet and uses DigitalOcean Spaces (S3-compatible object storage service) as a CDN for serving images and
            downloads.</p>

        <h2 id="about-gatsby" className={styles.subtitle}>I Can Build a Static Website with Gatsby/React for
            You</h2>

        <p>White I have most experience working with Next.js and React, I also have some experience with Gatsby
            (a great React-based framework for static websites).</p>

        <p>I would be interested in creating a brochure website (a several-page website, listing your products
            or services), a landing page, a personal or company blog, or a custom E-commerce website with Gatsby
            for you.</p>

        <p>To add new website content, you would be able to use text templates in <a
            href="https://guides.github.com/features/mastering-markdown/"
            rel="nofollow">Markdown</a> format, WordPress
            as a headless CMS (content management system), or another CMS, for example, Contentful or TinaCMS.</p>

        <p>The key benefits of Gatsby are as follows:</p>

        <ul>
            <li>Small code size, very good performance, and high page load speed. The whole static website can
                be served from a CDN (content delivery network).
            </li>
            <li>Website security: a Gatsby-based website is static (as a rule) and there is nothing
                Gatsby-specific to hack into.
            </li>
            <li>Ease of creating new pages/posts. You or a developer can use text templates with Markdown syntax
                or a familiar headless CMS to add website content. And you will easily be able to switch to a
                different CMS later, if needed.
            </li>
            <li>Ease of adding lots of landing pages programmatically.</li>
            <li>Easier long-term website maintenance. Gatsby is more lightweight and less buggy than
                WordPress.
            </li>
            <li>A static Gatsby website is developed with React and can be upgraded to a full-fledged web app
                later if needed.
            </li>
        </ul>

        <h2 id="about-programmatic-seo" className={styles.subtitle}>I Can Add Landing Pages to Your Website with
            Programmatic SEO</h2>

        <p>I have experience with programmatic SEO and can help you automate generation of SEO-related data.</p>

        <p>I can create thousands or even tens of thousands landing pages for specific long-tail
            keywords on your website based on your search keywords research and other SEO-related data.</p>

        <p>IMPORTANT WARNING: Programmatic SEO should only be used in collaboration with a SEO specialist who knows what
            pages should be added and how fast. Fast addition of many low-quality pages might harm a website's SEO
            rankings severely. Before using programmatic SEO, it is recommended that the website already has high page
            rank, some domain authority, and backlinks. I do not provide SEO services and can only handle the technical
            part of
            programmatic SEO.</p>

        <p>If you want me to combine text fragments to generate your website content automatically, you must
            have the rights to use these fragments on your website and are solely responsible for legal
            compliance.</p>

        <p>Product keywords, URLs, and titles on ALL tens of thousands of product pages at <a
            href={COMPANY_WEBSITE_URL}>{COMPANY_WEBSITE_URL}</a> were
            generated programmatically with the help of my custom scripts and utilities, based on a system of
            core keywords, key product tags, and prefix/suffix modifiers.</p>

        <p>The website sitemap was also created and updated automatically with my custom Node.js utility.</p>

        <h2 id="about-automation-design" className={styles.subtitle}>I Can Help You Automate Repetitive Graphic
            Design Tasks</h2>

        <p>I have experience with automation of common image- and text-processing tasks, such
            as:</p>
        <ul>
            <li>bulk renaming, combining (for example, creating logos, product covers or adding watermarks), and
                resizing images;
            </li>
            <li>editing image metadata;</li>
            <li>generating new vector and raster images based on vector templates, color and font data, and
                user's choice;
            </li>
            <li>creating vector generative art based on your templates and specifications;</li>
            <li>populating mockups;</li>
            <li>generating TXT or JSON files based on templates and provided data.</li>
        </ul>

        <p>If you represent a digital agency or a SaaS startup, I can help you automate time-consuming and
            repetitive graphic design tasks.</p>

        <p>If you have lots of small, repetitive, and clearly defined design tasks, my custom scripts and
            utilities can save you days or even months of valuable and expensive designer time and help you get
            an edge over your competitors.</p>

        <h2 id="about-automation-graphics" className={styles.subtitle}>I Can Bulk-Recolor Vector Graphics for
            You</h2>

        <p>If you are a hobbyist/crafter/agency, you can order a pack of SVG/PNG/JPG backgrounds or clip art
            images based on your image templates and a list of colors (yours or mine).</p>

        <p>My proprietary scripts and utilities can handle recoloring and resizing of hundreds of thousands of
            images within a single task running in the background.</p>

        <p>ALL hundreds of thousands of images (except for the logo and icons) at <a
            href={COMPANY_WEBSITE_URL}>{COMPANY_WEBSITE_URL}</a> were
            generated programmatically with the help of my custom scripts and utilities.</p>

        <h2 id="about-editor" className={styles.subtitle}>I Can Create an Online Image Editor for You</h2>

        <p>I can create a simple online editor which will allow your users to customize images before
            purchasing or downloading your products based on these images.</p>

        <h2 id="about-project-examples" className={styles.subtitle}>Project Examples</h2>

        <p>Typical project durations and budgets:</p>

        <ul>
            <li>Development of a complex React/Next.js or React/Gatsby web app/website (for example, a custom E-commerce
                solution). Duration: from 2 to 8 or more months. Budget: from $6000 US to $32000+ US, depending on the
                project complexity. Conversion of an existing app without adding new features takes considerably less
                time than developing from scratch. Time and materials contract. Complete source code is provided after a
                milestone or the final payment has been made.
            </li>
            <li>Development of a static website in Gatsby/React with content provided by
                the client. Duration: from 1 to 8 or more weeks. Budget: from $1000 US to $8000+ US, depending
                on the project complexity. Time and materials or fixed-price contract. Complete source code is provided
                after the final payment has been made. Programmatic generation of landing pages for your Gatsby website
                is available for an additional fee, depending on project size and complexity.
            </li>
            <li>Development of an image-processing Node.js app (for example, an ad banner generator),
                command-line utility, or Adobe Illustrator script. Duration: from 2 days to 4 or more weeks.
                Budget: from $200 US to $4000+ US, depending on complexity. Time and materials or fixed-price
                contract. Delivery of source code is subject to negotiation.
            </li>
            <li>Project maintenance (minor enhancements, bug fixes, adding or updating content). Duration: from 1 hour
                to 1 or more weeks per month. Budget: from $50 US to $1000+ US, depending on complexity. Time and
                materials or fixed-price retainer contract. Complete source code is provided.
            </li>
        </ul>
    </Page>
);

export default AboutPage;
