<template>
  <div>
    <PageHeader :title="isChinese ? '隐私政策' : 'Privacy Policy'" :description="isChinese ? '更新日期：2026-09-05' : 'Updated: September 5, 2026'" />
    <section class="legal section pt-0">
      <div class="container">
        <div class="card legal-content">

<section v-if="isChinese" id="zh" aria-label="中文隐私政策">
<h2>共同说明与平台差异</h2>
<p>本政策统一说明 DartsCool 各平台应用的数据处理。应用由北京夺镖体育文化有限公司提供，无需注册账号，核心计分在本地完成。我们不出售个人信息，不使用数据进行广告画像或跨应用追踪，不提供开发者运营的云端比赛历史或自动日志上传。平台功能尚在逐步对齐，以下内容以实际版本为准，不代表所有平台已经提供相同能力。</p>
<p>各端会处理比赛设置、玩家昵称、分数及恢复状态；启用蓝牙功能时处理设备名称、标识及投镖数据。操作系统备份和迁移可能依用户系统设置保存部分本地数据，与开发者服务器上传不同。通过清除应用数据或卸载可删除本地数据；如需删除系统备份，请同时使用相应平台的备份管理功能。联系隐私事务请使用本页末尾邮箱。</p>
<h2>Apple 平台（iOS、iPadOS 等）</h2>
<p>通过系统 CoreBluetooth 连接飞镖盘，使用系统分配的外设标识。语音报分使用系统语音合成，不录音。启动后可在本地记录应用版本、系统与设备环境、比赛和蓝牙运行信息及错误详情，采用 Mars Xlog 本地日志组件及加密日志文件。该组件用于本地诊断，不是分析或广告服务。用户主动操作后通过系统分享或邮件导出日志，部分设备（如 Apple TV）不提供系统分享入口。日志与临时导出文件的保留及清理依该端实现和系统缓存管理，不适用下文鸿蒙的 7 天、128 段限制；可通过系统清除数据或卸载删除。分享前请确认接收方及附件内容。</p>
<h2>Android 平台</h2>
<p>Android 12 及以上使用附近设备的蓝牙扫描与连接权限；较旧系统为蓝牙发现声明位置权限，但应用不以此获取地理坐标。运行环境、比赛和蓝牙诊断信息保存在本地，通过 Mars Xlog 组件记录；主动导出时创建 ZIP 并交由系统选择接收应用，可能预填支持邮箱，但不会自动发送。诊断日志目录排除在配置的系统备份之外；其他应用数据可能由系统备份。新导出会清理旧导出压缩包，日志不适用鸿蒙专属保留期限，清除数据或卸载可删除本地文件。</p>
<h2>微信小程序</h2>
<p>比赛与设置通过小程序本地存储保存，蓝牙能力由微信提供并受其授权流程约束。微信平台自身的数据处理按其隐私政策执行；本小程序当前计分功能不要求向开发者提交姓名、手机号或账户资料。小程序没有原生应用的 Mars Xlog 诊断文件导出流程，不将原生端日志保留期限套用于小程序。可通过微信提供的存储管理清除本地数据。</p>
<h2 id="harmony">HarmonyOS（鸿蒙）详细说明</h2>
<p>DartsCool 鸿蒙版由<strong>北京夺镖体育文化有限公司</strong>提供。本节说明鸿蒙应用在设备上处理哪些信息、为什么处理，以及你的选择。无需注册或登录即可使用。我们不会要求你提供真实姓名、手机号、邮箱或身份证明；玩家名称可使用昵称。</p>
<h2>1. 我们处理的信息与用途</h2>
<ul>
  <li><strong>应用设置：</strong>语言、外观、声音与计分选项等，保存在应用私有存储，用于记住你的偏好。</li>
  <li><strong>比赛数据：</strong>当前比赛的玩家名称、比分、投镖记录、回合、统计与恢复状态，保存在应用私有存储，用于计分和中断恢复。不提供云端比赛历史。</li>
  <li><strong>蓝牙设备信息：</strong>在你授权并启动设备发现后，读取附近蓝牙设备广播的名称、设备标识（包括蓝牙地址 / MAC）、信号强度等，以识别兼容的 DB2、DB6 飞镖盘。兼容设备的连接信息在本次运行内使用，接收到的投镖数据用于自动计分。应用不将设备标识和地址上传给开发者，也不将它们写入持久化诊断记录。</li>
  <li><strong>诊断日志：</strong>在你同意本隐私政策后，应用可记录启动、比赛、蓝牙功能的粗粒度运行状态和非敏感错误码，用于排查故障。设备标识、蓝牙地址、令牌、原始数据包、负载和私有路径在持久化前移除或脱敏。诊断记录保存在加密的应用私有数据库中，不会自动上传。</li>
</ul>
<p>上述信息在本机处理，不用于广告、用户画像或跨应用追踪。应用不包含广告、分析或第三方数据采集 SDK。</p>
<h2>2. 蓝牙权限与授权时机</h2>
<p>应用仅声明接入蓝牙权限（ohos.permission.ACCESS_BLUETOOTH），用于发现和连接飞镖盘并自动接收投镖结果。首次打开应用时先展示隐私提示；你同意隐私政策后，仍须进入设备页主动点击授权并搜索按钮，才会申请系统蓝牙权限。首次启动及仅进入设备页不会自动扫描。</p>
<p>拒绝蓝牙权限不影响手动计分、比赛和统计。你可以在系统设置的应用权限管理中撤销蓝牙授权。应用不申请位置、麦克风、相机、通讯录或相册权限，也不录音。</p>
<h2>3. 诊断日志分享与第三方</h2>
<p>只有当你主动点击“分享日志”时，应用才在缓存中生成诊断文本和 ZIP 压缩包，并调用系统分享面板。你自行选择是否发送及接收方；打开面板并不表示已发送。该 ZIP 压缩包不是加密文件，接收方可以读取其内容，请仅分享给你信任的接收方。</p>
<p>我们不会静默向服务器上传诊断日志，也不会出售个人信息。你选择的接收应用或服务会按照其自身隐私政策处理收到的文件。打开本隐私网页时，系统浏览器及网站托管服务可能处理访问网页所必需的网络信息，例如 IP 地址、请求时间和浏览器信息；这些并非飞镖应用静默采集上传的数据。</p>
<h2>4. 保存期限与安全</h2>
<p>设置保留至你修改、清除应用数据或卸载应用。当前比赛用于中断恢复，在退出当前比赛、清除应用数据或卸载后删除；本应用不提供历史比赛云存储。诊断记录最多保留 7 天及 128 段，写入和导出时执行期限清理。</p>
<p>分享用临时明文在压缩后删除；临时压缩包和导出目录在分享面板关闭、导出或面板展示失败、下一次导出或下一次应用初始化时清理。该清理不影响仍在保存期限内的加密诊断记录。应用使用私有存储、诊断数据库加密及敏感字段脱敏来减少数据暴露。</p>
<h2>5. 你的权利与选择</h2>
<p>你可以查看和修改应用设置、查看当前比赛记录、退出比赛删除当前比赛、拒绝或撤销蓝牙授权、取消日志分享。通过系统清除应用数据或卸载应用可以删除本地数据及隐私同意记录；重新安装或清除数据后会再次显示隐私提示。不同意隐私政策时可以选择退出应用。如需咨询、访问、更正、删除信息或撤回同意方面的协助，请通过下列邮箱联系我们。</p>
<h2>6. 未成年人</h2>
<p>未成年人应在监护人指导下阅读本政策并使用应用。我们不以识别或收集未成年人身份为目的。请使用昵称，避免在玩家名称或主动反馈中填写不必要的个人信息。监护人如有相关问题可联系我们。</p>
<h2>7. 政策更新与联系</h2>
<p>当功能、权限或数据处理方式发生实质变化时，我们将更新本政策并在需要时重新提示你确认。运营者：北京夺镖体育文化有限公司。隐私问题、投诉及权利请求邮箱：<a href="mailto:bbc6bae9@gmail.com">bbc6bae9@gmail.com</a>。</p>
</section>
<section v-else id="en" lang="en" aria-label="English privacy policy">
<h2>Common terms and platform differences</h2>
<p>This unified policy covers DartsCool apps provided by Beijing Duobiao Sports Culture Co., Ltd.. Core scoring is local and requires no account. We do not sell personal information, use it for advertising profiles or cross-app tracking, or operate automatic diagnostic uploads or cloud match history. Features are being aligned across platforms; the following describes actual behavior, not a promise of feature parity. Apps process match settings, player nicknames, scores and recovery state; Bluetooth features process device names, identifiers and throws. System backup and migration may retain some local data according to your settings, separately from developer uploads. Clearing data or uninstalling removes local data; manage system backups separately.</p>
<h2>Apple platforms</h2>
<p>CoreBluetooth uses system-assigned peripheral identifiers. Score announcements use system speech synthesis, without recording audio. Local diagnostics may start at launch and include app version, OS and device environment, match and Bluetooth events and error details. Mars Xlog provides encrypted local diagnostic files, not analytics or advertising. Export requires a user action through system sharing or email; sharing is unavailable on some devices such as Apple TV. Retention and temporary-export cleanup follow that platform implementation and system cache management, not the HarmonyOS seven-day / 128-segment limit. Clear app data or uninstall to remove local files. Check recipients and attachments before sharing.</p>
<h2>Android</h2>
<p>Android 12+ uses nearby-device scan/connect permissions; older versions declare location permissions for Bluetooth discovery, not geographic-coordinate collection. Local Mars Xlog diagnostics include runtime, match and Bluetooth information. A user action creates a ZIP and opens the system recipient chooser, possibly with a support email prefilled; nothing is sent automatically. The diagnostic directory is excluded by the configured backup rules, while other data may be backed up by the system. A new export removes old export archives. HarmonyOS retention limits do not apply. Clear app data or uninstall to remove local files.</p>
<h2>WeChat mini program</h2>
<p>Matches and settings use mini-program local storage. Bluetooth is provided by WeChat and follows its authorization flow. WeChat itself processes information under its own policy. Current scoring does not require names, phone numbers or account details to be submitted to the developer. The mini program does not provide native Mars Xlog file export; native log-retention rules do not apply. Use WeChat storage controls to clear local data.</p>
<h2>HarmonyOS details</h2>
<p class="meta">Effective and updated: September 5, 2026. The details below apply to the HarmonyOS app com.duobiao.dartscool.</p>
<p>The app is provided by Beijing Duobiao Sports Culture Co., Ltd.. No account or login is required. You need not provide your real name, phone number, email or identity documents. Player names may be nicknames.</p>
<h2>1. Information and purposes</h2>
<ul>
  <li><strong>Settings:</strong> language, appearance, sound and scoring preferences are stored privately on your device to remember your choices.</li>
  <li><strong>Match data:</strong> current player names, scores, throws, rounds, statistics and recovery state are stored privately for scoring and interrupted-match recovery. There is no cloud match-history service.</li>
  <li><strong>Bluetooth information:</strong> after authorization and an explicit scan action, the app reads nearby device broadcasts, including names, device identifiers / Bluetooth MAC addresses and signal strength, to identify compatible DB2/DB6 dartboards. Compatible device connection information is used during the current app session. Received throws are used for scoring. Device identifiers and addresses are not uploaded to the developer or retained in diagnostic records.</li>
  <li><strong>Diagnostics:</strong> after privacy consent, coarse app, match and Bluetooth states and non-sensitive error codes may be stored to troubleshoot problems. Identifiers, addresses, tokens, raw packets, payloads and private paths are removed or redacted before persistence. Records use an encrypted app-private database and are not automatically uploaded.</li>
</ul>
<p>These data are processed locally, not for advertising, profiling or cross-app tracking. The app contains no advertising, analytics or third-party data-collection SDKs.</p>
<h2>2. Bluetooth permission</h2>
<p>The app declares Bluetooth access (ohos.permission.ACCESS_BLUETOOTH) to discover and connect dartboards and receive throws. First launch presents a privacy notice. After accepting it, you must still explicitly select the authorization and search action on the devices page before the system permission request. First launch and simply opening the devices page do not start a scan. Denial does not prevent manual scoring, matches or statistics. You can revoke Bluetooth access in system app-permission settings. The app does not request location, microphone, camera, contacts or photo-library access and does not record audio.</p>
<h2>3. Sharing and third parties</h2>
<p>Only your explicit Share Logs action creates a temporary text file and ZIP archive and opens the system share panel. You decide whether to send it and to whom. Opening the panel does not send the file. The ZIP is not encrypted and can be read by its recipient; share only with recipients you trust. There is no silent diagnostic upload or sale of personal information. Selected receiving apps and services process the file under their own policies.</p>
<p>When you open this policy website, the browser and website hosting service may process network information necessary to serve it, such as IP address, request time and browser information. This is separate from background data collection by the darts app.</p>
<h2>4. Retention and security</h2>
<p>Settings remain until changed, app data is cleared or the app is uninstalled. Current-match data is deleted when exiting the match, clearing app data or uninstalling. Diagnostics are limited to seven days and 128 segments, with retention cleanup on writes and exports. Temporary plaintext is removed after compression; export archives and directories are removed on panel dismissal, export or presentation failure, the next export or the next app initialization. Retained encrypted diagnostic records are unaffected by export cleanup. Private storage, diagnostic database encryption and redaction reduce data exposure.</p>
<h2>5. Your choices</h2>
<p>You can view and change settings, view current-match records, exit a match to delete it, deny or revoke Bluetooth access, and cancel sharing. Clearing app data or uninstalling deletes local data and consent records. A fresh installation or data reset requires consent again. You may decline the privacy policy and exit. Contact us for help with access, correction, deletion or withdrawal of consent.</p>
<h2>6. Children</h2>
<p>Minors should review this policy and use the app with a guardian's guidance. The app is not designed to identify children. Use nicknames and avoid unnecessary personal information in player names or voluntary feedback. Guardians may contact us with concerns.</p>
<h2>7. Updates and contact</h2>
<p>Material changes to features, permissions or processing will be reflected in this policy, with renewed notice and consent where needed. Operator: Beijing Duobiao Sports Culture Co., Ltd.. Privacy questions, complaints and rights requests: <a href="mailto:bbc6bae9@gmail.com">bbc6bae9@gmail.com</a>.</p>
</section>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale, locales } = useI18n();
const route = useRoute();
const languageCookie = useCookie<string>('i18n_redirected');
const isChinese = computed(() => locale.value.startsWith('zh'));
// Keep existing app links working while using the site's shared locale routes.
onMounted(() => {
  const requested = route.query.lang === 'zh' ? 'zh-CN' : route.query.lang === 'en' ? 'en' : undefined;
  const preferred = requested || (route.path === '/privacy' ? languageCookie.value : undefined);
  if (preferred && preferred !== locale.value && locales.value.some(item => item.code === preferred)) {
    setLocale(preferred);
  }
});
useHead(() => ({
  title: isChinese.value ? 'DartsCool 隐私政策' : 'DartsCool Privacy Policy'
}));
</script>
