<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Prayer Time – Mu’min Life</title>

  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="app">

  <!-- HEADER -->
  <header class="top">
    <div>
      <h1>Prayer Time</h1>
      <small>নামাজের সময়</small>
    </div>
    <a href="index.html">🏠</a>
  </header>

  <!-- CONTENT -->
  <main class="content">

    <div class="card banner" id="location">
      📍 Detecting location...
    </div>

    <div class="card prayer" id="hijri">
      🌙 Loading Hijri date...
    </div>

    <div class="card">
      <ul class="prayer-list" id="prayerTimes">
        <li>Loading prayer times...</li>
      </ul>
    </div>

  </main>

  <!-- BOTTOM NAV -->
  <nav class="bottom">
    <span>🏠</span>
    <span class="active">🕌</span>
    <span>📿</span>
    <span>⚙️</span>
  </nav>

</div>

<script src="assets/js/prayer.js"></script>
</body>
</html>
