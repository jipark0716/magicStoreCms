<div id="dialog-item-create" class="dialog">
    <form>
        @include('form.input', [
            'name' => 'name',
            'title' => '이름'
        ])
        <div class="form-group">
            <label>작업대</label>
            <input type="hidden" name="table_id">
            <div class="select-creating-table">
                <div class="wrap"></div>
            </div>
        </div>
        @include('form.input', [
            'name' => 'player_level',
            'title' => '계정 레벨'
            'type' => 'number'
        ])
        @include('form.input', [
            'name' => 'table_level',
            'title' => '작업대 레벨'
            'type' => 'number'
        ])
        @include('form.input', [
            'name' => 'time',
            'title' => '제작 시간'
            'type' => 'number'
        ])
        @include('form.input', [
            'name' => 'exp',
            'title' => '의뢰 경험치'
            'type' => 'number'
        ])
        @include('form.input', [
            'name' => 'gold',
            'title' => '의뢰 골드'
            'type' => 'number'
        ])
        @include('form.input', [
            'name' => 'rank_point',
            'title' => '의뢰 랭킹 포인트',
            'type' => 'number'
        ])
        @include('form.input', [
            'name' => 'mana',
            'title' => '마나 소모량',
            'type' => 'number'
        ])
        <div class="form-group">
            <label>이미지</label>
            <input type="hidden" name="table_id">
            <div class="select-creating-table">
                <div class="wrap"></div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">추가</button>
    </form>
</div>