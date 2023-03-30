import sys
from pathlib import Path

import pytest
import validate_catalog as vc


def test_validate_filename(capsys):
    file = Path("./catalog/povmap-philippines")
    ok = vc.validate_filename(file)
    assert ok
    captured = capsys.readouterr()
    assert captured.out == ""


@pytest.mark.skip
def test_validate_csv_hxl_invalid_gdrive_file(capsys):
    url = "https://drive.google.com/uc?id=1_cmrGkIivqzMHgDHEx18_oJTc6PB665i"
    ok = vc.validate_csv_hxl(url, "airquality-thailand-model.yml")
    assert not ok
    captured = capsys.readouterr()
    assert (
        captured.out
        == f"Invalid file airquality-thailand-model.yml: CSV link {url} is missing required HXL Tags. Please visit https://hxlstandard.org/ to learn how to add HXL tags to your datasets.\n"
    )
