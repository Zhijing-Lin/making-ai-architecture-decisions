VIDEO PLACEHOLDER
=================

Place your course introduction video in this folder and name it:

    intro.mp4

The video is referenced in index.html as:
    assets/video/intro.mp4

RECOMMENDED FILE SPECS
-----------------------
Format:     MP4 (H.264 video, AAC audio)
Resolution: 1280×720 (720p) minimum — 1920×1080 preferred
File size:  Keep under 150 MB for reasonable web load times
Duration:   10–15 minutes works well for this type of module

SYNTHESIA EXPORT SETTINGS
--------------------------
If you exported from Synthesia, download the MP4 version
(not the SCORM package). Place the downloaded file here and
rename it to intro.mp4.

YOUTUBE / VIMEO ALTERNATIVE
-----------------------------
If you prefer to host the video on YouTube or Vimeo instead
of serving it as a local file, replace the <video> block in
index.html (around the "Start the Module" section) with an
<iframe> embed from your video platform of choice.

Example YouTube embed:
    <iframe
      width="100%" height="450"
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      title="Course introduction video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>

Wrap the iframe in a <div class="video-wrapper"> to apply
the existing styles.
