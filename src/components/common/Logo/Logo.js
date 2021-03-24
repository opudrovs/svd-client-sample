import { memo } from 'react';

import PropTypes from 'prop-types';

const classNames = require('classnames');

import { COMPANY_NAME } from 'constants/TextConstants';

import styles from './Logo.module.scss';

/**
 * The logo of the application.
 */

const Logo = ({
    href,
    externalClassName
}) => (
    <a
        href={href}
        title={COMPANY_NAME}
        className={classNames(
            'd-inline-flex',
            styles.logo,
            externalClassName
        )}
    >
        <svg id="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.93336 40">
            <path
                d="M11.90847,10.55979c0-.93681.28572-2.40525.28572-3.83187,0-1.42762-.48981-1.91643-1.50925-1.91643-2.07871,0-4.11759,1.63071-4.11759,5.09622,0,6.931,9.13317,4.36249,9.13317,12.55786,0,5.17685-3.71042,7.62391-7.29838,7.46064C2.164,29.64149.53332,23.97382.53332,21.93494c0-1.42662.77454-1.345,1.01944-1.345a1.84249,1.84249,0,0,1,1.22254.52963c1.75316,2.691,2.97669,3.95432,4.97476,3.95432a2.64481,2.64481,0,0,0,2.44606-2.85324c0-5.54521-8.80663-3.54714-8.80663-12.31295,0-6.84938,6.034-9.78526,10.1108-9.78526,3.46551,0,5.54521,1.95725,5.54521,4.85131a12.9642,12.9642,0,0,1-1.63071,6.72793c-.40817.61126-.57045,1.10107-1.26435,1.10107-.73371,0-1.58989-.85617-1.87561-1.06026A1.78108,1.78108,0,0,1,11.90847,10.55979Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M38.37116,29.35477c-2.56851,0-4.19922-1.99707-4.19922-3.139,0-1.8348.16327-3.95432.32654-5.99321l.28472-3.792c0-.36637-.2449-.85618-.61126-.52964a14.19394,14.19394,0,0,0-2.44607,3.14l-.73372,9.53935c0,.36736-.20409.77454-.61226.77454-1.50826,0-4.24-1.63071-4.24-3.46451.12245-2.73179.36735-6.035.77453-9.05154.08164-.448-.12245-.77454-.40718-.77454-.48981,0-2.20215,2.32362-2.73178,3.30224-.32654,2.89506-.61127,5.78912-.77454,9.37708-.04082.36736-.16327.57144-.57145.57144a4.986,4.986,0,0,1-3.99514-2.0797,5.77287,5.77287,0,0,1-.08163-1.22353c0-6.97083,1.10108-15.1662,2.32361-15.1662a4.70894,4.70894,0,0,1,1.8348.48981c1.06026.28473,1.8348.52964,1.8348,1.5889,0,.12345-.16327,1.50925-.24491,2.12052.57145-1.1409,2.16134-3.343,3.50632-3.343a2.2639,2.2639,0,0,1,.6939.12245c1.1409.32554,2.81243,1.14189,3.17979,1.87462.16327.2449.04081.85617,0,1.14289a12.97958,12.97958,0,0,1,3.9135-3.38487c.40818-.16327.48981-.16327,1.18271.04082,1.26435.40718,3.46551,1.18271,3.46551,2.60933a6.007,6.007,0,0,1-.04082.85618c-.28472,4.6074-.6929,8.31682-1.06026,13.61712C38.9008,28.94759,38.6977,29.35477,38.37116,29.35477Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M55.09042,29.07a.54687.54687,0,0,1-.61127.57145c-2.40525,0-4.15841-1.10108-4.15841-2.73179a11.10683,11.10683,0,0,1,.20409-1.71235c-.81535,2.20116-2.12052,4.44414-4.07777,4.44414-2.48688,0-4.44413-2.28379-4.44413-6.035,0-6.97184,3.54714-12.88341,7.74637-12.88341,3.09914,0,3.26241,1.42662,3.588,2.93588.77453,0,3.01751.16327,3.01751,1.58989C55.94659,18.02143,55.13124,27.56079,55.09042,29.07Zm-4.11759-9.86589c.16327-2.16134.57045-4.40431-.448-4.48595-1.30517-.12146-3.71041,4.28086-3.71041,8.5219,0,1.05927.36636,1.71235.77454,1.71235C48.89312,24.95245,49.9942,21.93494,50.97283,19.20415Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M67.039,16.554a5.08523,5.08523,0,0,0-2.5277,3.09815c-.97862,2.32362-1.01944,5.5034-1.345,8.64336a.80428.80428,0,0,1-.81536.73372c-2.56852,0-3.66959-1.54907-3.79205-2.28279v-.81635a100.94536,100.94536,0,0,1,1.91644-14.10594.70053.70053,0,0,1,.77453-.57045c1.10108,0,3.95432.448,3.95432,1.63071a11.94164,11.94164,0,0,1-.52963,2.28279c1.01944-1.95725,2.65015-3.95531,4.24-4.03695.61126-.03982.6929-.08163.85617.77454,0,.36736.36736,3.26241-.48882,3.71141C68.26253,16.14582,68.22171,15.98255,67.039,16.554Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M69.89523,12.1915a.82457.82457,0,0,1,.57045-.77554c1.01945,0,2.07971-.08064,3.75123-.16227.81536-5.83093,1.22254-10.071,2.16034-10.071,1.75317,0,3.75123.897,3.75123,1.30417a2.40892,2.40892,0,0,1-.08163.57145c-.28572,1.794-.6929,5.01458-1.10108,7.828,1.22353-.04082,1.63071-.04082,2.44706-.04082.28473,0,1.345.93781,1.345,2.89506,0,.448-.20409.73273-.449.73273-1.10009,0-1.95626-.03983-3.83187.04181-.77454,5.01458-1.26435,10.27407-1.50826,14.18857-.04082.36636-.20409.6929-.65308.6929a4.66793,4.66793,0,0,1-3.139-2.32461,5.36344,5.36344,0,0,1-.28572-1.71234,102.18267,102.18267,0,0,1,.897-10.47816c-.52963,0-1.22253.08164-1.8348.08164C71.03613,14.96311,69.89523,13.20994,69.89523,12.1915Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M94.48132,29.23331a.886.886,0,0,1-.85617.48881c-1.75317,0-6.4422-.28572-6.72693-2.97569-.16327-1.30517-3.50633-23.485-3.50633-25.5229,0-.36736.40718-1.14189,1.01945-1.14189,1.63071,0,3.62778.65308,4.19922,1.46743.36637.53063,2.03789,15.12638,2.691,21.89413C92.85061,18.02143,94.767,8.64336,96.43857.65308,96.5202.28572,96.64266,0,97.009,0c1.794,0,4.52577,1.42762,4.52577,2.48688a.95492.95492,0,0,1-.08164.32654C99.45508,11.90478,95.94876,25.15554,94.48132,29.23331Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M107.32789,29.518c-4.48495.16327-7.25756-3.54615-7.25756-8.43927,0-7.41983,4.32168-10.968,8.9699-10.968,1.8348.08163,4.15841.97962,4.15841,4.11859,0,5.21867-3.46551,7.09428-6.19729,6.97183a3.33019,3.33019,0,0,1-1.8348-.57145,4.0836,4.0836,0,0,0-.08164.65308c0,2.65016.897,4.19923,2.03889,4.24005A2.55026,2.55026,0,0,0,108.877,24.83c.48882-.40718,1.26335-1.1419,1.91643-1.1419.48882,0,1.63071,1.42762,1.63071,2.48688a1.72726,1.72726,0,0,1-.36735,1.01944A5.974,5.974,0,0,1,107.32789,29.518ZM105.24818,18.6327s.04082.32654.897.36636c1.1419.04182,2.5277-1.05926,2.73179-3.42469.04082-.48881.08164-1.54907-.61127-1.63071C106.87889,13.78039,105.53391,16.06418,105.24818,18.6327Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M121.92563,29.4364c-3.46551,0-6.84938-1.46744-6.84938-8.07191,0-7.05347,4.036-11.82315,8.92908-11.25369,1.345.16327,3.83187.81635,3.99514,3.54814,0,1.67053-1.18271,5.17685-2.65015,5.17685-1.22254,0-2.32362-.448-2.32362-1.18171a16.65731,16.65731,0,0,1,.48882-2.07971c.16327-.65208.48981-1.50825-.24391-1.67053-1.794-.40817-3.30323,2.9757-3.30323,7.58211,0,2.3246.20408,3.87368,1.71234,3.99613,1.71235.12245,2.85424-2.242,3.71041-2.242.53063,0,1.26435.52964,1.87562,2.20116a1.85315,1.85315,0,0,1-.20409,1.1419A6.7858,6.7858,0,0,1,121.92563,29.4364Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M129.0219,12.1915a.82457.82457,0,0,1,.57045-.77554c1.01944,0,2.0797-.08064,3.75123-.16227.81536-5.83093,1.22254-10.071,2.16034-10.071,1.75317,0,3.75123.897,3.75123,1.30417a2.40892,2.40892,0,0,1-.08163.57145c-.28572,1.794-.6929,5.01458-1.10108,7.828,1.22353-.04082,1.63071-.04082,2.44706-.04082.28473,0,1.345.93781,1.345,2.89506,0,.448-.20409.73273-.449.73273-1.10009,0-1.95626-.03983-3.83187.04181-.77454,5.01458-1.26435,10.27407-1.50826,14.18857-.04082.36636-.20409.6929-.65308.6929a4.66793,4.66793,0,0,1-3.139-2.32461,5.36344,5.36344,0,0,1-.28572-1.71234,102.18267,102.18267,0,0,1,.897-10.47816c-.52963,0-1.22254.08164-1.8348.08164C130.1628,14.96311,129.0219,13.20994,129.0219,12.1915Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M152.50791,11.90478c1.42662.77553,2.7726,2.85523,2.7726,6.56465,0,5.87175-2.65015,11.09042-7.09428,11.17206-2.16134.03982-6.31975-.53063-6.31975-7.42083,0-5.38194,2.89506-11.33433,7.46065-11.21188A6.40815,6.40815,0,0,1,152.50791,11.90478Zm-5.91158,11.00878c0,1.63071.28473,3.05833,1.1409,3.14,1.42762.12145,2.60934-3.588,2.85424-8.48109.04082-.77454.12246-2.81243-.61126-2.9757C148.47095,14.2702,146.59633,18.26634,146.59633,22.91356Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M165.88311,16.554a5.08523,5.08523,0,0,0-2.5277,3.09815c-.97862,2.32362-1.01944,5.5034-1.346,8.64336a.80359.80359,0,0,1-.81536.73372c-2.56851,0-3.66959-1.54907-3.792-2.28279v-.81635a101.09613,101.09613,0,0,1,1.91643-14.10594.70119.70119,0,0,1,.77454-.57045c1.10107,0,3.95531.448,3.95531,1.63071a11.92962,11.92962,0,0,1-.53062,2.28279c1.01944-1.95725,2.65015-3.95531,4.241-4.03695.61126-.03982.6929-.08163.85617.77454,0,.36736.36636,3.26241-.48981,3.71141C167.10565,16.14582,167.06483,15.98255,165.88311,16.554Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M170.04351,25.11572c.65209-6.89119,1.54908-13.74057,2.36443-17.57344a3.7278,3.7278,0,0,0-.897.449,27.42252,27.42252,0,0,0-1.30417-3.9135,1.12947,1.12947,0,0,1,.48882-.81635A18.397,18.397,0,0,1,179.25732.48981a7.8579,7.8579,0,0,1,5.17785,1.54907c2.40525,1.71235,4.03695,4.934,3.99614,9.90771-.04082,9.74444-4.89313,17.48981-11.62,17.57145C174.24274,29.68131,170.04351,28.82513,170.04351,25.11572Zm7.1351-15.81928c-.61226,4.32068-1.30516,9.45871-1.794,14.22839.04082,1.26435,1.38581,1.30517,1.95626,1.22353,3.46551-.48881,5.62684-5.91257,5.62684-13.413,0-4.72985-2.28279-6.19829-4.07677-6.31974a5.01192,5.01192,0,0,0-2.12052.57045.04.04,0,0,1,.04082.04081C177.78988,6.36056,177.34089,8.23618,177.17861,9.29644Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M196.7103,29.518c-4.48495.16327-7.25756-3.54615-7.25756-8.43927,0-7.41983,4.32268-10.968,8.9699-10.968,1.8348.08163,4.15841.97962,4.15841,4.11859,0,5.21867-3.46551,7.09428-6.1963,6.97183a3.32717,3.32717,0,0,1-1.8348-.57145,4.08464,4.08464,0,0,0-.08163.65308c0,2.65016.897,4.19923,2.03789,4.24005a2.54861,2.54861,0,0,0,1.75316-.6929c.48981-.40718,1.26435-1.1419,1.91643-1.1419.48981,0,1.63071,1.42762,1.63071,2.48688a1.73178,1.73178,0,0,1-.36636,1.01944A5.97452,5.97452,0,0,1,196.7103,29.518ZM194.63159,18.6327s.03982.32654.897.36636c1.1409.04182,2.5277-1.05926,2.73079-3.42469.04082-.48881.08164-1.54907-.61127-1.63071C196.2623,13.78039,194.91632,16.06418,194.63159,18.6327Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M207.92516,25.5229a1.45109,1.45109,0,0,0,1.99707-1.30517c0-2.5267-5.42276-2.5267-5.42276-7.46064,0-3.14,2.48788-5.99321,6.52384-5.99321,2.20116,0,4.6074,1.01944,4.89213,3.83286,0,2.40525-2.03789,4.8105-2.65016,4.8105-.48881,0-1.95625-.81536-1.95625-1.46744.08164-.449.73372-.97863.73372-1.91643,0-.97863-.32654-1.8348-1.346-1.75317-1.22254.08164-1.63071,1.63071-1.63071,2.85325,0,3.87368,5.82993,2.40624,5.82993,7.54328,0,2.93587-2.7716,4.6064-5.34012,4.6064-4.85231,0-5.09721-5.09522-5.09721-5.29931,0-.16327.04081-.32654.20408-.36735a1.091,1.091,0,0,1,.85618.32654A4.07989,4.07989,0,0,0,207.92516,25.5229Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M221.86982,29.55985c-2.2828,0-4.3625-1.794-4.3625-3.66959v-.32654a127.42929,127.42929,0,0,1,1.87562-14.2284c.04081-.57144.81535-.81635,1.22353-.81635,1.54907,0,3.792,1.18272,3.792,2.242a6.98613,6.98613,0,0,1-.16327,1.01944,113.4334,113.4334,0,0,0-1.75316,15.208C222.48208,29.39658,222.278,29.55985,221.86982,29.55985Zm3.62877-26.50152c0,1.30417-.40718,3.66959-1.30416,3.66959h-.77454c-1.71235-.12245-3.38387-.85617-3.38387-2.52869.12145-.896.16227-3.42469,1.54907-3.42469a6.31075,6.31075,0,0,1,3.2206.898A2.0656,2.0656,0,0,1,225.49859,3.05833Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M238.1799,31.92328a.152.152,0,0,0-.04082.12345c-1.22353,4.23905-3.71041,8.07192-7.828,7.95046a5.28259,5.28259,0,0,1-4.81149-3.87368,3.84687,3.84687,0,0,1-.12146-2.03889V34.003c0-.448.73372-1.1419,1.10009-.77454,1.50925,1.345,2.65015,1.95725,3.588,1.95725,2.16134-.04082,3.62878-3.344,4.48495-8.19437a5.01572,5.01572,0,0,1-3.87268,2.89406c-3.2216.08164-4.689-2.60933-4.689-7.46164,0-4.52477,2.60934-11.90478,7.99127-11.90478,3.42469,0,6.23812,2.36543,6.23812,4.77068A64.82527,64.82527,0,0,1,238.1799,31.92328Zm-2.40525-15.32946v.04081c-.16327-1.54907-.61226-2.44606-1.3868-2.44606-1.794,0-3.05733,4.3625-3.343,6.52284-.28572,3.01751.24491,4.241,1.14189,4.36249C234.38785,25.35963,235.44811,19.16233,235.77465,16.59382Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
            <path
                d="M243.075,25.89026c.16227-5.17885.897-11.9466,1.54907-14.18857.12246-.40818.28473-.65308.81536-.65308,1.58989,0,3.87268.65308,3.87268,1.42761v.20409l-.52963,2.32361c1.54908-1.71234,3.139-3.50632,4.48495-3.95531.65209-.2031,4.19923,1.46843,4.19923,2.56851a8.58619,8.58619,0,0,1-.12245.93781c-.448,4.56758-.81536,8.03209-1.06026,14.14875,0,.448-.24391.56945-.65209.56945a3.92933,3.92933,0,0,1-1.91643-.36636c-2.2828-.6929-2.11953-1.71235-2.11953-3.17978a56.42537,56.42537,0,0,1,.32555-5.74831c.12245-1.30516.40817-2.40624.40817-3.4665,0-.36636-.08163-.65208-.36735-.65208-.73372,0-2.77161,2.60933-3.46551,3.30223-.32555,2.93588-.57045,5.95339-.73372,9.58117,0,.40817-.16327.57144-.57045.57144-1.50826,0-3.792-1.01944-3.99614-1.83479A6.673,6.673,0,0,1,243.075,25.89026Z"
                transform="translate(-0.53332)"
                fill="#fff"
            />
        </svg>
    </a>
);

Logo.propTypes = {
    href: PropTypes.string.isRequired,
    externalClassName: PropTypes.string
};

export default memo(Logo);
