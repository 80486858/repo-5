window.BENCHMARK_DATA = {
  "lastUpdate": 1729185716894,
  "repoUrl": "https://github.com/80486858/repo-5",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "name": "Jim",
            "email": "jim@github.com"
          },
          "committer": {
            "name": "Laur Sisask",
            "username": "laursisask",
            "email": "laur.sisask@gmail.com"
          },
          "id": "4955134d46fcfe5d2b78123038207174966e8d32",
          "message": "Update workflow",
          "timestamp": "2024-10-17T17:20:20Z",
          "url": "https://github.com/80486858/repo-5/commit/4955134d46fcfe5d2b78123038207174966e8d32"
        },
        "date": 1729185716185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 1.3575303138453587,
            "unit": "iter/sec",
            "range": "stddev: 0.007714360465903786",
            "extra": "mean: 736.6318009999986 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 12.388411635592846,
            "unit": "iter/sec",
            "range": "stddev: 0.007616582982850669",
            "extra": "mean: 80.72059836362914 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.29174195574250017,
            "unit": "iter/sec",
            "range": "stddev: 0.03109842620817113",
            "extra": "mean: 3.4276866262 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.446021189024812,
            "unit": "iter/sec",
            "range": "stddev: 0.0006758570215723122",
            "extra": "mean: 57.31965983333175 msec\nrounds: 18"
          }
        ]
      }
    ]
  }
}