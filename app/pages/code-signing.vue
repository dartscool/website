<template>
  <div>
    <PageHeader title="Code Signing Policy" description="How LocalSend binaries are signed" />

    <section class="legal section pt-0">
        <div class="container">
            <div class="card legal-content">
                <h2>Code Signing</h2>
                <p>Free code signing provided by <a href="https://about.signpath.io" target="_blank" class="accent">SignPath.io</a>, certificate by <a href="https://signpath.org" target="_blank" class="accent">SignPath Foundation</a>.</p>
                <p>Windows binaries of LocalSend are signed with a certificate provided by SignPath Foundation. All binaries are built in a verifiable way directly from the source code in the <a href="https://github.com/localsend/localsend" target="_blank" class="accent">LocalSend repository</a>.</p>

                <h2>Team Roles</h2>
                <p>The LocalSend team is organized as follows:</p>
                <ul>
                    <li><strong>Committers and reviewers:</strong> <a href="https://github.com/Tienisto" target="_blank" class="accent">@Tienisto</a></li>
                    <li><strong>Approvers:</strong> <a href="https://github.com/Tienisto" target="_blank" class="accent">@Tienisto</a></li>
                </ul>

                <h2>Privacy Policy</h2>
                <p>This program will not transfer any information to other networked systems unless specifically requested by the user or the person installing or operating it.</p>
                <p>For more details, see our <NuxtLink to="/privacy" class="accent">Privacy Policy</NuxtLink>.</p>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>
